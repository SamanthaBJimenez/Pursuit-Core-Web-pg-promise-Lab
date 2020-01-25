const db = require('../db/db.js');

const getAllPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT * FROM posts");
        res.status(200).json({
            posts,
            status: "success",
            message: "ALL POSTS"
        });
    } catch (err) {
        next(err);
    }
}

const getUsersPosts = async (req, res, next) => {
    try {
        let post = await db.one ("SELECT * FROM posts WHERE id = $1 ", [req.params.id]);
        res.status(200).json({
            posts, 
            status: "success",
            message: "USERS POSTS RETRIEVED"
        })
    } catch (err) {
        next(err);
    }
}

const createNewPost = async (req, res, next) => {
    try {
        let posts = await db.one("INSERT INTO posts (poster_id, body) VALUES (${poster_id}, ${body)) RETURNING *", req.body);
        res.status(200).json({
            posts,
            status: "success",
            message: "NEW POST CREATED"
        })
    } catch(err) {
        next(err);
    }
}

module.exports = {getAllPosts, getUsersPosts, createNewPost};
