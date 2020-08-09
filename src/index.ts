import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { QuarterResolver } from './resolvers/QuarterResolver'

(async () => {
    const app = express();
    app.use(cors());

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [QuarterResolver]
        }),
        context: ({req, res}) => ({req, res})
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(8888, () => {
        console.log('Server up and running on port 8888');
    })

})();