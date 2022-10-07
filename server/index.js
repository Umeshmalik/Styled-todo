require('dotenv').config();
const express = require('express');
const cors = require("cors");
const { connect } = require('mongoose');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors())

const conn = connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.use(routes())
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`)
    })
})
