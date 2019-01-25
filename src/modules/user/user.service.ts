import { User } from "./user.entity";
import { hash } from "bcrypt";
import Service from "../../helpers/Service";


class UserService extends Service {

    entity: any = User;
    entityName: string = "Usuário";

    public async createUser(user: any) {

        const {information} = user;

        const newUser  = new User();

        try {
            //user fields
            newUser.name = user.name;
            newUser.email = user.email;
            newUser.password = await hash(user.password, 10);

            if(information) {
                //information fields
                // userInfo.fullname = information.fullname;
                // userInfo.birthday = information.birthday;
                // userInfo.general_description = information.general_description;
                // userInfo.degree = information.degree;
                // userInfo.goals = information.goals;
                // userInfo.type = information.type;
                
                // newUser.information = userInfo
            }

            return await this.create(newUser);

        } catch (err) {
            console.log(err.message);
            throw err;
        }

    }
}

export default UserService;