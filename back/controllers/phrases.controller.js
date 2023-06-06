const { json } = require("express")

let phrases = []

const index = (req,res) => {
    // return all phrases and view
    res.json({phrases: phrases})
}

const store = (req,res) => {
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
