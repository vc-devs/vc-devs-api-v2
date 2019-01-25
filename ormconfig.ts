import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config } from "./config";

export const ormConfig: PostgresConnectionOptions = {
   type: "postgres",
   host: config.HOST,
   port: config.PORT,
   username: config.USER,
   password: config.PASSWORD,
   database: config.DATABASE,
   ssl: true,
   synchronize: true,
   logging: false,
   entities: [
      "src/modules/**/*.entity.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   }
}