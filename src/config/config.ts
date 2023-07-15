import {ConfigValues} from "../constant/config-values";
import * as fs from "fs";
import dotenv from "dotenv";
import {DefaultConfigValues} from "../constant/default-config-values";

let env = process.env.NODE_ENV;
fs.access(
    ConfigValues.CONFIG_PATH +
    ConfigValues.ENV_EXTENSION +
    env,
    (err) => {
      dotenv.config(
          {path: ConfigValues.CONFIG_PATH + ConfigValues.DEVELOPMENT_EVN})
    }
)
dotenv.config({
  path:
      ConfigValues.CONFIG_PATH +
      ConfigValues.ENV_EXTENSION +
      env
});

export const config = {
  db: {
    DB_HOST: process.env.DB_HOST || DefaultConfigValues.DB_HOST,
    DB_NAME: process.env.DB_NAME || DefaultConfigValues.DB_NAME,
    DB_TYPE: process.env.DB_NAME || DefaultConfigValues.DB_TYPE,
    DB_USER: process.env.DB_USER || DefaultConfigValues.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD || DefaultConfigValues.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT || DefaultConfigValues.DB_PORT,
  },
  env: {
    APP_MODE_IS_PROD: env == 'prod',
  }
}