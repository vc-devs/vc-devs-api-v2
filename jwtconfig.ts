import { config } from "./config";

const passportJWT: any = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;

export default {
    secretOrKey: config.SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};
