import { Request, Response } from "express-serve-static-core";

export default abstract class ControllerReturns {

    public returnSuccess(res: Response, data: any, message: any = null, created: boolean = false) {
        return res.status(created ? 201 : 200).send({
            message: message,
            data: data,
            error: false
        });
    }

    public returnError(res: Response, message: any = null) {
        return res.status(401).send({
            message: message,
            error: true
        });
    }

    public return(res: Response, data: any, message: any = null, error: boolean = false, status: any = 200) {
        return res.status(status).send({
            message,
            data,
            error
        });
    }

}