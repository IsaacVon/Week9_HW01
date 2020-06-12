
const mongoose = require('mongoose');

    const workoutSchema = new mongoose.Schema({
        day: { type: Date, default: Date.now },
        exercises: [
          {
            type: String,
            name: String,
            duration: {type: Number},
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            duration: {type: Number},
            distance: {type: Number}
          }
        ]
      })


module.exports = workoutSchema;




  