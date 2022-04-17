const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, require: true },
        teacher_id:{type:mongoose.Schema.Types.ObjectId,ref:"teacher"}
    }
)
module.export = mongoose.model('admin', adminSchema);