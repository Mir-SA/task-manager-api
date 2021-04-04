const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
            required: true,
        },
        status: {
            type: String,
            default: "incomplete",
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

// Defining the model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
