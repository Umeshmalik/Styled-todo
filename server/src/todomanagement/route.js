const express = require('express')
const controller = require('./controller')

module.exports = () => {
    const router = express.Router({mergeParams: true});

    router.route('/task').post(controller.addTask)

    return router;
}