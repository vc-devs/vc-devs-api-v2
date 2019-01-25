import Controller from "../../helpers/Controller";
import UserService from "./user.service";


export default class UserController extends Controller {

    service: UserService = new UserService();
    options: object = {};
    relations: string[] = [
        'information',
        // 'information.type',
        // 'information.school',
        // 'address',
        // 'diplomas',
        // 'payments',
        // 'courses',
        // 'classrooms',
        // 'manager_classrooms',
        // 'tasks'
    ];

    /**
     *
     * @param req
     * @param res
     * @return {Promise<any>}
     */
    public store = async (req: any, res: any) => {
        const user = req.body;

        try {
            const userCreated = await this.service.createUser(user);

            if (userCreated) {
                return res.status(201).send({
                    message: "Usuário criado com sucesso!",
                    error: false,
                    data: userCreated
                });
            } else {
                return res.status(400).send({
                    message: "Erro ao criar usuário",
                    error: true
                });
            }

        } catch (err) {
            return res.json({
                message: `Erro ao inserir Usuário, ${err.message}`,
                error: true
            });
        }

    }
    
}