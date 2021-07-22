const { Router } = require('express');
const express = require('express');
const Bike = require('../models/bikesModel');
const router = express.Router();
const Note = require('../models/noteModel');

router.route("/create").post((req,res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });

    newNote.save();
})

// router.route("/bikes").post(Bike);

router.route("/notes").get((req,res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

router.route("/getBikes").get((req,res) => {
    Bike.find()
        .then(foundBikes => res.json(foundBikes));
})

module.exports = router;