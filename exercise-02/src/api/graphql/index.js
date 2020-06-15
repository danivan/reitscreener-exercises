import Koa from 'koa'; // koa@2
import { ApolloServer } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import db from '../../../models';

const typeDefs = importSchema(path.join(__dirname, '../../../../schema.gql'));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '/resolvers'), { recursive: true }));
const context = { context: { db } };
const server = new ApolloServer({ typeDefs, resolvers, context });

const app = new Koa();
server.applyMiddleware({ app });

// eslint-disable-next-line no-console
app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`));

export default server;
