const express = require('express')
const controller = require('./controller')

module.exports = () => {
    const router = express.Router({mergeParams: true});

    router.route('/push')
        .post(controller.push)
    
    router.route('/pullRequest')
        .post(controller.pullRequest)
    
    router.route('/mergePR')
        .post(controller.mergePR)

    return router;
}