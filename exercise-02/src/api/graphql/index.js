import koa from 'koa'; // koa@2
import { ApolloServer, gql } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const typeDefs = importSchema(path.join(__dirname, '../../../../schema.gql'));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '/resolvers'), { recursive: true }));
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new koa();
server.applyMiddleware({ app });
 
app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`),
);
