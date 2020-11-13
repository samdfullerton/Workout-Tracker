const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => { 
    db.Workout.find({}, (err, data) => {
      if (err) {
          res.status(404).send("not working")
      }else {
        res.json(data)
      }
    })
    
})

module.exports = router;