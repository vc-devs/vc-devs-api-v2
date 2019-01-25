
import { createConnection, Connection } from "typeorm";
import { ormConfig } from "../ormconfig";

export const connection: Promise<Connection> = createConnection(ormConfig);
