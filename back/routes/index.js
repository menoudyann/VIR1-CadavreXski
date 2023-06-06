const { Router } = require("express")
const { phrasesRoutes } = require("./phrases.routes")
const router = Router()
router.use("/phrases", phrasesRoutes)

module.exports = {
    router
}
