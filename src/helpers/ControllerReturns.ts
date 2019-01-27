import { Request, Response } from "express-serve-static-core";

export default abstract class ControllerReturns {

    public return200(res: Response, data: any, message: any = null, created: boolean = false) {
        return res.status(created ? 201 : 200).send({
            message: message,
            data: data,
            error: false
        });
    }

    public return500(res: Response, message: any = null) {
        return res.status(500).send({
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