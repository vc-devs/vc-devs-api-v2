
import "reflect-metadata";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as morgan from "morgan";
import * as http from "http";
import chalk from "chalk";
import { connection } from "./db";
import { Connection } from "typeorm";
import router from "./routes";


connection.then( (connection: Connection) => {
    // const routes: express.Router = require("./routes/index");
    const app = express();
    const server = http.createServer(app);
    
    //middlewares
    app.use(morgan("dev"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    app.use(function (req: any, res: any, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    
    //load routes
    app.use('/', router);
    
    // run express application on port 3000
    server.listen(4000, () => {
        console.log(chalk.greenBright(`api-vc-dev-v2 has been started!`));
    });
})
.catch(e => console.log(e));

