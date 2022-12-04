const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Event = require('../models/Event');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },

    addEvent: async (parent, args, context) => {
      try {
        if (context.user) {
          // const eventData = await Event.create(args);

          return await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { event: { ...args } } },
            { new: true }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      } catch (err) {
        console.error(err);
      }
    },

    login: async (parent, { username, password }) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) {
          throw new AuthenticationError('No user found with this username');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
