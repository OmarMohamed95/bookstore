import express, { Router, Application } from 'express'
import * as routes from '../routes/routes'
import config from '../config/app.json'
import path from 'path'
import { Route } from '../types/Route';

class RouteInitializer {

    async init(app: Application): Promise<void> {
        for (const [groupName, routeGroup] of Object.entries(routes)) {
            var router: Router = express.Router();
            for (const [groupKey, route] of Object.entries(routeGroup.routes)) {
                const controllerPath: string = this.getControllerName(route);

                let {default: controllerClass} = await import(controllerPath);
                let controller = new controllerClass();

                this.defineRoute(router, route, controller);
            }

            app.use(routeGroup.prefix, router);
        }
    }

    private defineRoute(router: Router, route: Route, controller: any): void {
        const httpMethod: string = route.httpMethod.toLowerCase();
        switch (httpMethod) {
            case 'get':
                router.get(route.url, controller[route.method]);
                break;
            case 'post':
                router.post(route.url, controller[route.method]);
                break;
            case 'put':
                router.put(route.url, controller[route.method]);
                break;
            case 'patch':
                router.patch(route.url, controller[route.method]);
                break;
            case 'delete':
                router.delete(route.url, controller[route.method]);
                break;
            default:
                throw new Error("The provided HTTP method is invalid");
                break;
        }
    }

    private getControllerName(route: Route): string {
        let controllerName = route.controller.charAt(0).toUpperCase() + route.controller.slice(1);
        const controllersDir = path.join(__dirname, config.controller_path);
        return controllersDir.concat(controllerName);
    }
}

export default RouteInitializer;