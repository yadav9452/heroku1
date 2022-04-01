const mongoose = require("mongoose");

const userSchema = new mongoose.Schema([{
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
}],
    {
        versionKey: false,
        timestamps: true,
    });

module.exports = mongoose.model("userdata", userSchema);