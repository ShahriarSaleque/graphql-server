import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

// grab the mock data 
import { games, author, review } from "./_db.js";

// resolvers
const resolvers = {
    Query: {
        games: () => games,
        author: () => author,
        reviews: () => review,
    }
}; 

// server setup 
const server = new ApolloServer({
    // types defs => type definition of data being retrieved 
    // resolvers
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`server ready at ${url}`);