
import SubjectModel from "../model/subject.model.js";

const getAllsubject = async (req, res) => {
    try {
        let subjects = await SubjectModel.find().sort({ subject: 1, topic: 1, position: 1 });

        res.status(200).send({
            status: 200,
            message: "All subject videos retrieved successfully",
            data: subjects
        });
    } catch (error) {
        console.error("Failed to get all data:", error);
        res.status(500).send({
            status: 500,
            message: "Failed to retrieve all subject videos. Please try again later."
        });
    }
};



const getOneSubject = async (req, res) => {
    try {
        let { subject, topic } = req.query;
        let filter = {};

        if (subject) {
            filter.subject = subject;
        }
        if (topic) {
            filter.topic = topic;
        }

        let subjectData = await SubjectModel.find(filter).sort({ subject: 1, topic: 1, position: 1 });

        res.status(200).send({
            status: 200,
            message: "Filtered data successfully",
            data: subjectData
        });
    } catch (error) {
        console.error("Failed to get data:", error);
        res.status(500).send({
            status: 500,
            message: "Failed to retrieve subject data. Please try again later."
        });
    }
};


const addSubject = async (req, res) => {
    try {
        let subjectData = new SubjectModel(req.body);
        await subjectData.save();

        res.status(200).send({
            status: 200,
            message: "successfully added Subject",
            data: subjectData
        });
    } catch (error) {
        console.error("Failed to add subject data:", error);
        res.status(500).send({
            status: 500,
            message: "Failed to add subject data. Please try again later."
        });
    }
};

export { getAllsubject, getOneSubject, addSubject }