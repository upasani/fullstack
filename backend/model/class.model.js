const mongoose = require('mongoose');

const classSchema = mongoose.Schema(
    {
        Grade: { type: String, required: true },
        Section: { type: String, required: true },
        Subject: { type: String, required: true }

    }
)
module.export = mongoose.model("classe", classSchema);
