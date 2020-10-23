const { User, Book }= require('../models');
const { AuthenticationError }= require('apollo-server-express');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__V -password')
                .populate('savedBooks')
        }
        

    }
}

module.exports = resolvers