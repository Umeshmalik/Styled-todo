const GithubActions = require("../../modals/GithubActions");

const push = async(req, res) => {
    try{
        const {request_id, author, branch, createdAt} = req.body;
        console.log(req.body);
        await GithubActions.create({
            request_id,
            author,
            action: "push",
            to_branch: branch,
            timestamp: createdAt
        })
        res.json({message: "success"})
    }catch(err){
        throw new Error(err)
    }
}

const pullRequest = async (req, res) => {
    try{
        const {request_id, author, from_branch, to_branch, createdAt} = req.body;
        console.log(req.body);
        await GithubActions.create({
            request_id,
            author,
            action: "pull_request",
            from_branch,
            to_branch,
            timestamp: createdAt
        })
        res.json({message: "success"})
    }catch(err){
        throw new Error(err)
    }
}

const mergePR = async (req, res) => {
    try{
        const {request_id, author, from_branch, to_branch, createdAt} = req.body;
        console.log(req.body);
        await GithubActions.create({
            request_id,
            author,
            action: "merge_pr",
            from_branch,
            to_branch,
            timestamp: createdAt
        })
        res.json({message: "success"})
    }catch(err){
        throw new Error(err)
    }
}

module.exports = { push, pullRequest, mergePR }