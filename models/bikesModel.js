const mongoose = require('mongoose');

const bikesSchema = {
    brand : String,
    model : String
}

const Bike = mongoose.model("BikeDetails",bikesSchema);

const bike1 = new Bike({
    brand : "Kawasaki",
    model : "ZX-10r"
})

const bike2 = new Bike({
    brand : "Duckati",
    model : "penigale V4"
})

Bike.insertMany([bike1,bike2]);

module.exports = Bike;