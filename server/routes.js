const express = require('express')

const todoRoutes = require("./src/todomanagement/route")

module.exports = () => {
    const router = express.Router()
    router.get("/", (req, res) => {
        res.send("Yupp! Working fine")
    })
    .post("/", (req, res)=>{
        console.log(req.body);
        res.json(res.body);
    })
    .use(todoRoutes())
    
    return router
}
