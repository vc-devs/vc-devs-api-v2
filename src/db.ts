
import { createConnection, Connection } from "typeorm";
const config = require('../ormconfig.json')

export const connection: Promise<Connection> = createConnection(config);