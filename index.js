import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

// grab the mock data 
import { games, authors, reviews } from "./_db.js";

// resolvers
const resolvers = {
    Query: {
        games: () => games,
        game: (_,args) => {
            return games.find(game => game.id === args.id);
        },
        authors: () => authors,
        author: (_,args,) => {
            return authors.find(author => author.id === args.id);
        },
        reviews: () => reviews,
        review: (_,args) => {
            return reviews.find(review => review.id === args.id);
        }
    },
    Game: {
        reviews: (parent) => {
            return reviews.filter(review => review.game_id === parent.id);
        }
    },
    Author: {
        reviews: (parent) => {
            return reviews.filter(review => review.author_id === parent.id);
        }
    },
    Review: {
        Game: (parent) => {
            return games.find((game) => game.id === parent.game_id)
        },
        Author: (parent) => {
            return authors.find((author) => author.id === parent.author_id)
        }
    },
    Mutation: {
        deleteGame: (_,args) => {
            return games.filter(game => game.id !== args.id);
        },
        addGame: (_,args) => {
            const newGame = {
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString()
            }
            games.push(newGame);
            return games
            
        },
        updateGame: (_,args) => {
            console.log('args', args);
            games = games.map((game) => {
                if(game.id === args.id){
                    return {
                        ...game,
                        ...args.game
                    }
                }

                return game;
            });

            console.log('games', games);

            return games.find(game => game.id === args.id);
        }
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