const express = require('express')

const todoRoutes = require("./src/todomanagement/route")

module.exports = () => {
    const router = express.Router()
    router.get("/", (req, res) => {
        res.send("Yupp! Working fine")
    })
    .use(todoRoutes())
    
    return router
}
