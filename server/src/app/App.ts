import express, { Application } from 'express'
import RouteInitializer from './RouteInitializer';
import config from '../config/app.json';
import middlewares from '../config/middlewares'

class App {
    static readonly port = process.env.APP_PORT || config.server.port;
    private app: Application;
    

    constructor () {
        this.app = express()
        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares() {
        middlewares.forEach((middleware: any) => {
            this.app.use(middleware);
        });
    }

    initRoutes() {
        const routeInitializer = new RouteInitializer();
        routeInitializer.init(this.app);
    }

    initServer() {
        this.app.listen(App.port, () => {
            console.log(`web server running on port ${App.port}`);
            console.log(`listening on http://127.0.0.1:${App.port}/`);
        });
    }
}

export default App;