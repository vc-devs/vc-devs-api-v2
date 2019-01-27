import Controller from "../../helpers/Controller";
import UserService from "./user.service";


export default class UserController extends Controller {

    service: UserService = new UserService();
    options: object = {};
    relations: string[] = [];
    
}