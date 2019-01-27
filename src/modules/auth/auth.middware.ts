import { sign, verify } from "jsonwebtoken";
import { getConnection } from "typeorm";
import { User } from "../user/user.entity";
import { compare } from "bcryptjs";
import cfg from "../../../jwtconfig";

const connection = getConnection();
const manager = connection.manager;

const auth: any = async (req: any, res: any, next: any) => {

    let token = cfg.jwtFromRequest(req);

    if (token) {
        try {

            let decoded: any = verify(token, cfg.secretOrKey);

            if (decoded.exp <= Date.now()) {
                return res.status(401).send({
                    message: 'Acesso Expirado, faça login novamente',
                    error: true
                })
            }

            let user = await manager.findOne(User, { email: decoded.email });

            if (user) {
                next();
            } else {
                return dispatchUnauthorizedError(res);
            }

        } catch (err) {
            return dispatchUnauthorizedError(res);
        }
    } else {
        return dispatchUnauthorizedError(res);
    }
};

export const generateToken: any = async (req: any, res: any) => {
    let { email, password } = req.body;

    const user = await manager.findOne(User, { email: email });
    
    if (user) {

        const match = await compare(password.toString(), user.password);

        if (!match) {
            return res.status(401).send({
                message: 'Usuário ou senha incorretos.',
                error: true
            });
        }

    } else {
        return res.status(401).send({
            message: 'Usuário ou senha incorretos.',
            error: true
        });
    }

    const date = new Date();
    const token = sign({ email: user.email, exp: new Date().setHours(date.getHours() + 1) }, cfg.secretOrKey);

    res.send({
        message: 'success',
        tokens: { token: token, expires_in: new Date().setHours(date.getHours() + 1) },
        user: user,
        error: false
    });
};

const dispatchUnauthorizedError = (res: any) => {
    return res.status(401).send({
        message: 'Unauthozired',
        error: true
    });
}


export default auth;