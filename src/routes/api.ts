import * as express from "express";
import usersRouter from "../modules/user/users.router";

const router: express.Router = express.Router();

router.use('/users', usersRouter);


export default router;

// import * as express from "express";
// import { lstatSync, readdirSync }  from 'fs';

// const app: any = express.Router();

// // router.use('/users', usersRouter);
// const { join } = require('path');

// const isDirectory = (source: any) => lstatSync(source).isDirectory();
// const getDirectories = (source: any) => readdirSync(source).filter(name => isDirectory(join(source, name)));


// export default (router: any) => getDirectories(join(__dirname, 'modules')).forEach(route => app.use(`/api/${route}`, require(`./modules/${route}`)));
