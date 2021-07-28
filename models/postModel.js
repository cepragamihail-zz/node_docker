const mongooose = require("mongoose");

const postSchema = new mongooose.Schema({
    title: {
        type: String,
        require: [true, "Post must have title"]
    },
    body: {
        type: String,
        require: [true, "Post must have body"]
    }
});

const Post = mongooose.model("Post", postSchema);
module.exports = Post;
