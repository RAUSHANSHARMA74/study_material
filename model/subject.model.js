import mongoose, { Schema } from "mongoose";

const SubjectSchema = new Schema({
    url: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    teacher: {
        type: String,
        trim: true,
        required: true,
    },
    subject: {
        type: String,
        trim: true,
        required: true,
    },
    topic: {
        type: String,
        trim: true,
        required: true,
    },
    position: {
        type: Number,
    },
    level: {
        type: String,
        trim: true,
    },
    exam: [
        {
            type: String,
            trim: true, // added trim for consistency
        },
    ],
    deleted: {
        type: Boolean,
        default: false,
    },
});

const SubjectModel = mongoose.model("Subject", SubjectSchema);

export default SubjectModel