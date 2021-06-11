import express, { Router, Application } from 'express'
import * as routes from '../routes/routes'
import config from '../config/app.json'
import path from 'path'
import { Route } from '../types/Route';
import { RouteGroup } from '../types/RouteGroup';

class RouteInitializer {

    async init(app: Application): Promise<void> {
        for (const [groupName, routeGroup] of Object.entries(routes)) {

            var router: Router = express.Router();

            for (const [groupKey, route] of Object.entries(routeGroup.routes)) {

                const controllerPath: string|boolean = this.getControllerPath(route);
                const middlewarePath: string|boolean = this.getMiddlewarePath(routeGroup);

                if (!controllerPath && middlewarePath) {
                    this.defineMiddlewareRoute(app, routeGroup, route);
                } else if (controllerPath && this.isHandlerMethodProvided(route)) {
                    this.defineControllerAndMiddlewareRoute(router, routeGroup, route)
                } else {
                    throw new Error("Invalid route, it should have either a controller or a middleware");
                }
            }

            app.use(routeGroup.prefix, router);
        }
    }

    private async defineControllerAndMiddlewareRoute(router: Router, routeGroup: RouteGroup, route: Route): Promise<void> {
        const httpMethod: string = route.httpMethod.toLowerCase();
        const controllerPath: string|boolean = this.getControllerPath(route);
        const middlewarePath: string|boolean = this.getMiddlewarePath(routeGroup);
        
        const {default: middleware} = (middlewarePath) ? await import(middlewarePath.toString()) : '';

        let {default: controllerClass} = await import(controllerPath.toString());
        let controller = new controllerClass();

        let handler: string = route.method ?? '';

        if (!handler) {
            throw new Error("Invalid route, it should have a handler method");
        }

        if (middleware) {
            router.use(middleware);
        }

        switch (httpMethod) {
            case 'get':
                router.get(route.url, controller[handler]);
                break;
            case 'post':
                router.post(route.url, controller[handler]);
                break;
            case 'put':
                router.put(route.url, controller[handler]);
                break;
            case 'patch':
                router.patch(route.url, controller[handler]);
                break;
            case 'delete':
                router.delete(route.url, controller[handler]);
                break;
            default:
                throw new Error("The provided HTTP method is invalid");
                break;
        }
    }

    private async defineMiddlewareRoute(app: Application, routeGroup: RouteGroup, route: Route): Promise<void> {
        const middlewarePath: string|boolean = this.getMiddlewarePath(routeGroup);

        const {default: middleware} = await import(middlewarePath.toString())

        if (middleware) {
            app.use(route.url, middleware)
        }
    }

    private getControllerPath(route: Route): string|boolean {
        if (!route.controller) {
            return false;
        }

        let controllerName = route.controller.charAt(0).toUpperCase() + route.controller.slice(1);
        const controllersDir = path.join(__dirname, config.controller_path);
        return controllersDir.concat(controllerName);
    }

    private getMiddlewarePath(routeGroup: RouteGroup): string|boolean {
        if (!routeGroup.middleware) {
            return false;
        }

        const middlewareName = routeGroup.middleware;
        const middlewaresDir = path.join(__dirname, config.middleware_path);
        return middlewaresDir.concat(middlewareName);
    }

    private isHandlerMethodProvided(route: Route): boolean {
        if (!route.method) {
            return false;
        }

        return true;
    }
}

export default RouteInitializer;