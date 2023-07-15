import {MikroORM} from '@mikro-orm/core'
import path from 'path'
import {Post} from "../entity/post";
import {User} from "../entity/user";
import {Token} from "../entity/token";
import {config} from "./config";

export default {
  migrations: {
    path: path.join(__dirname, ".././migrations"),
  },
  allowGlobalContext: true,
  type: config.db.DB_TYPE,
  entities: [Post, User, Token],
  dbName: config.db.DB_NAME,
  user: config.db.DB_USER,
  password: config.db.DB_PASSWORD,
  host: config.db.DB_HOST,
  port: config.db.DB_PORT,
  debug: config.env.APP_MODE_IS_PROD,
} as Parameters<typeof MikroORM.init>[0];