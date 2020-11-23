const client = require("./models/index.js");
const express = require("express");
const mongoose = require ("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://samfu:rootroot@cluster0.jmavo.mongodb.net/workouts?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/route-api.js"));
app.use(require("./routes/route-html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
