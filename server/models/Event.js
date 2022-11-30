const { Schema, model, Types } = require('mongoose');
const eventSchema = new Schema({
    

    name: { 
        type: String, 
        required: true,
        unique: false,
        
     },
    startDate: {
        type: String,
        required: true,
        unique: false,
       
     },
     endDate: {
      type: String,
      required: true,
      unique: false,
     },
    
   
    },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      },
  );


   // Initialize the Events model
  const Event = model('event', eventSchema);


  
  module.exports = Event;