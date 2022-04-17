const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model('teacher', teacherSchema);