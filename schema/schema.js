const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
  }

  # Root TYPE
  type Query {
    books: [Book]
    bookViaId(id: ID): Book
    authors: [Author]
  }

  type Mutation {
    addBook(id: ID, name: String, genre: String): Book
  }
`;

module.exports = typeDefs;
