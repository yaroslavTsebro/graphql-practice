import {MikroORM} from "@mikro-orm/core";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import ormConfig from "../config/orm-config";

export async function initOrm() {
  const orm = await MikroORM.init<PostgreSqlDriver>(ormConfig);
}