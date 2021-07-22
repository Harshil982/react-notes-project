const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const url = "mongodb+srv://Harshil:harshil@cluster0.myeh8.mongodb.net/notesDB?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
    if (err) console.log(err);
    else console.log("connection successful");
});

app.use("/",require("./routes/noteRoutes"))

app.listen("3001",()=>{
    console.log("Server Running")
})