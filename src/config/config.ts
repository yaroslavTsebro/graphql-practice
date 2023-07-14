import {ConfigValues} from "../constant/config-values";
import * as fs from "fs";

fs.access(
    ConfigValues.CONFIG_PATH +
    ConfigValues.ENV_EXTENSION +
    process.env.NODE_ENV, (err) => {
      dotenv.config(
          {path: ConfigValues.CONFIG_PATH + ConfigValues.DEVELOPMENT_EVN})
    })
dotenv.config({
  path:
      ConfigValues.CONFIG_PATH +
      ConfigValues.ENV_EXTENSION +
      process.env.NODE_ENV
});