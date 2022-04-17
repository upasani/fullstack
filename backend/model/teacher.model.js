const mongoose = require('mongoose');

const teacherSChema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        Gender: { type: String, required: true },
        Age: { type: Number, required: true },
        class_id:{type:mongoose.Schema.Types.ObjectId, ref:"classes"}

    }
)
module.exports = mongoose.model("teacher", teacherSChema);