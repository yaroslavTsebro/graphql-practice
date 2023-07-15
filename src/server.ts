import "reflect-metadata";
import {MikroORM} from "@mikro-orm/core";
import ormConfig from "./config/orm-config";
import express from "express";
import {config} from "./config/config";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolver/hello-resolver";

export const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await orm.getMigrator().up();
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: true,
    }),
    context: () => ({em: orm.em})
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({app});

  const PORT = config.server.port;
  app.listen(PORT, () => {
    console.log(`⚡ Server is running on port ${PORT} ⚡`);
  });
};