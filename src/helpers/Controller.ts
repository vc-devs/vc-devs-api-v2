import Service from "./Service";
import {Request, Response} from "express-serve-static-core";
import ControllerReturns from "./ControllerReturns";

abstract class Controller extends ControllerReturns {

    abstract service: Service;
    abstract options: object;
    abstract relations: string[];

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    public get = async (req: Request, res: Response) => {
        const id = req.params.id;

        if (!id) {
            this.returnError(res, `ID de ${this.service.entityName} inválido!`);
        }

        const data = await this.service.get(id, {...this.options, relations: this.relations});
        this.returnSuccess(res, data);
    };


    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    public index = async (req: Request, res: Response) => {
        const limit = req.query.limit || 15;
        const data = await this.service.all(limit, {...this.options, relations: this.relations});
        this.returnSuccess(res, data);
    };


    /**
     *
     * @param req
     * @param res
     * @return {Promise<void>}
     */
    public store = async (req: any, res: any) => {
        try {
            const created = await this.service.create(req.body);
            if (created) {
                this.returnSuccess(res, created, `${this.service.entityName} criado com sucesso!`, true);
            } else {
                this.returnError(res, `Erro durante criação de ${this.service.entityName}`);
            }
        } catch (err) {
            console.log(err);
            this.returnError(res, `Erro durante a criação. ${err.message}`);
        }
    };

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    public update = async (req: Request, res: Response) => {
        const id = req.params.id;

        if (!id) {
            this.returnError(res, `ID de ${this.service.entityName} inválido!`);
        }

        try {
            const updated = await this.service.update(req.body, id);
            if (updated) {
                this.returnSuccess(res, updated, `${this.service.entityName} atualizado com sucesso!`);
            } else {
                this.returnError(res, `Erro durante a atualização de ${this.service.entityName}`);
            }
        } catch (err) {
            console.log(err);
            this.returnError(res, `Erro durante a atualização. ${err.message}`);
        }
    };

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    public delete = async (req: Request, res: Response) => {
        const id = req.params.id;

        if (!id) {
            this.returnError(res, `ID de ${this.service.entityName} inválido!`);
        }

        try {
            if (await this.service.delete(id)) {
                this.returnSuccess(res, null, `${this.service.entityName} excluido com sucesso!`, true);
            } else {
                this.returnError(res, `Erro durante a exclusão de ${this.service.entityName}`);
            }
        } catch (err) {
            console.log(err);
            this.returnError(res, `Erro durante a exclusão. ${err.message}`);
        }
    };
}

export default Controller;