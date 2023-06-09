const { json } = require("express")
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../database/db");
const Word = require("../models/word");

let phrases = []

const index = (req,res) => {
    allWords = Word.findAll()
    allWords.forEach(element => {
        phrases.push(element.word)
    });
    // return all phrases and view
    res.json({phrases: phrases})
}

const store = (req,res) => {
    Word.create({ word: req.body.phrase });
    // store phrase and redirect to index
    phrases.push(req.body.phrase)
    res.json({phrase: req.body.phrase})
}

const destroy = (req,res) => {
    // delete all phrases and redirect to index
    phrases = []
    res.json({phrase: "All phrases deleted"})
}

module.exports = {
    index,
    store,
    destroy
}
