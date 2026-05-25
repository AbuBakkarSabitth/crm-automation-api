const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type:  String,
        required: true
    },
    phone: {
        type: String
    },
    status: {
        type: String,
        enum: ["new", "contacted","converted"],
        default: "new"
    },

 notes: [
        {
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]

},

{
    timestamps: true
}
);
module.exports =mongoose.model("Lead", leadSchema);