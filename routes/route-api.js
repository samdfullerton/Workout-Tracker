const router = require("express").Router();
const Workout = require("../models");

 router.get("/api/workouts", (req, res) => { 
    Workout.find({}, (err, data) => {
      if (err) {
          res.status(404).send("not working")
      }else {
        res.json(data)
      }
    })
    
});

router.get("/api/workouts/range", (req, res) => { 
    Workout.find({}, (err, data) => {
      if (err) {
          res.status(404).send("not working")
      }else {
        res.json(data)
      }
    }).limit(7)
    
});

router.post("/api/workouts", (req, res) => {
    Workout.create({}, (err, data) => {
        if (err) {
            res.status(404).send("not working")
        }else {
            res.json(data)
        }
    })
})  

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, (err, data) => {
        if (err) {
            res.status(404).send("not working")
        }else {
            res.json(data)
        }
    })
}) 

module.exports = router;