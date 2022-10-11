require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { connect } = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '10mb'}))
app.use(cors());

connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    const routes = require('./routes')
    app.use(routes())
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${process.env.PORT}`)
    })
})
