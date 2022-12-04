const { Schema } = require('mongoose');
const eventSchema = new Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: false,
      unique: false,
    },
    startDate: {
      type: String,
      required: false,
      unique: false,
    },
    endDate: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Initialize the Events model
// const Event = model('event', eventSchema);

module.exports = eventSchema;
