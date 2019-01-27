import { User } from "./user.entity";
import { hash } from "bcryptjs";
import Service from "../../helpers/Service";


class UserService extends Service {

    entity: any = User;
    entityName: string = "Usuário";

    public async createUser(user: any) {

        const newUser  = new User();

        try {
            newUser.name = user.name;
            newUser.email = user.email;
            newUser.password = await hash(user.password, 10);

            return await this.create(newUser);

        } catch (err) {
            console.log(err.message);
            throw err;
        }

    }
}

export default UserService;