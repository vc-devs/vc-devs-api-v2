import * as express from "express";
import apiRouter from "./api";
import authRouter from "../modules/auth/auth.router";
import authMiddware from "../modules/auth/auth.middware";

const router: express.Router = express.Router();

router.all('/', (req: any, res: any) => {
    res.send('Wellcome to EduPocket API!');
});

router.use('/auth', authRouter);
router.use('/api', authMiddware, apiRouter);

export default router;