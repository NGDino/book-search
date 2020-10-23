const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        bookcount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;