const { mongoose, Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


// const eventSchema = new mongoose.Schema({
//   name: { type: String, 
//         required: true },

//   startDate: {
//           type: String,
//           required: true,
//           unique: false,
         
//        },
//   endDate: {
//         type: String,
//         required: true,
//         unique: false,
       
//      },
// });
// const Event = mongoose.model('Event', eventSchema);
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  event: [  {
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
});

// const eventData = [{
//   name: 'big event',
//   startDate: '9/23',
//   endDate: '9/25'
// }]

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
// User.create(
//   { username: 'hoff', password: 'pass123', events: eventData },
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//   }
// );

module.exports = User;
