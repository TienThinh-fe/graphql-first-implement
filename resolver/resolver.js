const { booksData, authorsData } = require("../data/static");

const resolvers = {
  Query: {
    books: () => booksData,
    bookViaId: (parent, args) => booksData.find((book) => book.id === args.id),
    authors: () => authorsData,
  },
  Book: {
    author: (parent, args) =>
      authorsData.find((author) => author.id === parent.authorId),
  },
  Mutation: {
    addBook: (parent, args) => args,
  },
};

module.exports = resolvers;
