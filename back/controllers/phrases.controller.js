const { json } = require("express")
const {Sequelize, DataTypes} = require("sequelize");
const Word = require("../models/word");

const index = async (req,res) => {
    const words = await Word.findAll()
    // return all phrases and view
    res.json(words)
}

const store = async (req,res) => {
    const word = await Word.create({ word: req.body.phrase });
    // store phrase and redirect to index
    res.json(word)
}

const destroy = async (req,res) => {
    // delete all phrases and redirect to index
    await Word.destroy({truncate: true})
    res.sendStatus(200)
}

module.exports = {
    index,
    store,
    destroy
}
