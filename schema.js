import gql from "graphql-tag";

export const typeDefs = gql`
  type Game {
    id: ID!,
    title: String!,
    plaform: [String!]!
  },
  type Review {
    id: ID!,
    rating: Int!,
    content: String!
  },
  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
  },
  type Query {
    # each is an entry point to expose a particular type of data to the client
    # reviews end point theke we can access ony the review resource 
    # connected resource to review thakle we can get those as well
    reviews: [Review],
    games: [Game],
    author: [Author]
  }
`;