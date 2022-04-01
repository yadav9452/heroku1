const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema([{
    movie: { type: String, required: true },
    year: { type: String, required: true },
    budget: { type: String, required: true},
}],
    {
        versionKey: false,
        timestamps: true,
    });

module.exports = mongoose.model("filmdata", filmSchema);