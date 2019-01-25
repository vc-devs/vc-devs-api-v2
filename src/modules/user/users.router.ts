import * as express from "express";
import UserController from "./user.controller";
import Resource from "../../helpers/Resource";

const router: express.Router = express.Router();
const controller: UserController = new UserController();

const resource = Resource.create(router, controller);

export default resource;