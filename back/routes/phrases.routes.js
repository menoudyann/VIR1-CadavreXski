const { Router } = require("express")
const { index, store, destroy } = require("../controllers/phrases.controller")

const phrasesRoutes = Router()

phrasesRoutes.get('/', index)
phrasesRoutes.post('/', store)
phrasesRoutes.delete('/destroy', destroy)

module.exports = {
    phrasesRoutes
}
