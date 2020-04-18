const router = require("express").Router();
const Workouts = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  console.log("POST: ", req.body)
  Workouts.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Workouts.find({})

    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });


});


router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})

    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });


});

router.put("/api/workouts/:id", (req, res) => {

  console.log("PUT:", req.params, req.body)
  let body = req.body;
  let duration = req.body.duration
  console.log(body)
  Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: body }, $inc: { totalDuration: duration } })
    .then(dbWorkouts => {
      // console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})
module.exports = router;
