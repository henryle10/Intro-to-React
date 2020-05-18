const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required."
const minErrMsg = "{PATH} must be at least {MINLENGTH} characters."

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, requiredErrMsg],
            minLength: [10, minErrMsg],
        },
        punchline: {
            type: String,
            required: [true, requiredErrMsg],
            minLength: [3, minErrMsg],
        },
    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;