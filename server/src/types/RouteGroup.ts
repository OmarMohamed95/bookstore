import { Route } from './Route'

export type RouteGroup = {
    prefix: string,
    middleware?: string,
    routes: Route[]
};