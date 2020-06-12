const db = require("../models");
const path = require("path");
const router = require("express").Router()

// HTML Routes DONE
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


// API routes

// getLastWorkout
router.get('/api/workouts', function (req, res) {

});



// addExercise
// put
router.put('/api/workouts/:id', function (req, res) {

});


// createWorkout
// post
router.post('/api/workouts', function (req, res) {
  
});

// getWorkoutsInRange
router.get('/api/workouts/range', function (req, res) {
//     async function getCourses() {
//         const courses = await Course
// .find({       
//     res.json()
});




module.exports = router
// Add exercises to a previous workout plan
// Add new exercises to a new workout plan
// View multiple the combined weight of multiple exercises on the stats page.