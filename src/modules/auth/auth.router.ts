import * as express from "express";
import {generateToken} from "./auth.middware";

const router: any = express.Router();

//login router
router.post('/token', generateToken);

export default router;