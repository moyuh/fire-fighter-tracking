const { Schema, model, Types } = require('mongoose');
const eventSchema = new Schema({
    

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
        id: false,
      },
  );


   // Initialize the Events model
  const Event = model('event', eventSchema);


  
  module.exports = Event;