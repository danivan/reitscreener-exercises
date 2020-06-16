import Koa from 'koa'; // koa@2
import { ApolloServer, gql } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import db from '../../../models/index';

export default {
  start: (port = 4000) => {

    const typeDefs = importSchema(path.join(__dirname, '../../../../schema.gql'));
    const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '/resolvers'), { recursive: true }));

    const server = new ApolloServer({ typeDefs, resolvers, context: { db } });

    const app = new Koa();
    server.applyMiddleware({ app });

    app.listen({ port }, () => {
      // eslint-disable-next-line no-console
      console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
  },
};
