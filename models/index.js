const mongoose = require('mongoose');

    const WorkoutSchema = new mongoose.Schema({
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


const Workout = mongoose.model("Workout", WorkoutSchema);

console.log(Workout)

module.exports = Workout;




  