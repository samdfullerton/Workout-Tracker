const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://samfu:rootroot@cluster0.jmavo.mongodb.net/workouts?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
const workoutSchema = new mongoose.Schema({
    day: Date,
    exercises: Array
  });
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = {client, Workout};