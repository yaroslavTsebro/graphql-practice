import {Options} from '@mikro-orm/core'
import path from 'path'
import {Post} from "../entity/post";
import {User} from "../entity/user";
import {Token} from "../entity/token";
import {config as dbConfig} from "../config/config";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";

const config: Options<PostgreSqlDriver> = {
  migrations: {
    path: path.join(__dirname, '../../', './migrations'),
  },
  entities: [Post, User, Token],
  dbName: dbConfig.db.DB_NAME,
  user: dbConfig.db.DB_USER,
  password: dbConfig.db.DB_PASSWORD,
  debug: dbConfig.env.APP_MODE_IS_PROD,
};

export default config;