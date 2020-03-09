import * as express from 'express'
import * as bodyParser from "body-parser";
import * as ejs from 'ejs';
import * as path from 'path';
class App {
    public express;
    constructor() {
        this.express = express();
        this.config();     
        this.Routers();
    }
    private config(): void{
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.set('view engine', 'ejs');
        this.express.set('clients', path.join(__dirname, '/clients'));
    }
    private Routers(): void {
        const route = express.Router();
        route.get('/', (req, res) => {
            // res.render('home.ejs');
            res.end(res);
        });


        this.express.use('/',route);
    }

}
export default new App().express;