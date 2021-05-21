import * as routes from '../../routes/routes'
import { Route } from '../../types/Route';

class RouteManager {

    getUrlByRouteName(routeName: string): string {
        let url: string|undefined;
        for (const [groupName, routeGroup] of Object.entries(routes)) {
            routeGroup.routes.forEach((route: Route, key) => {
                if (routeName === route.name) {
                    url = routeGroup.prefix.concat(route.url).replace(/\/$/, "");
                }
            });
        }

        if (url) {
            return url;
        }

        throw new Error("Route name could not be found");
    }
}

export default RouteManager;