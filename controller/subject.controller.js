
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

const getGroupSubject = async (req, res) => {
    try {
        const { subject, topic } = req.query;

        const matchQuery = {};
        if (subject) {
            matchQuery.subject = subject;
        }
        if (topic) {
            matchQuery.topic = topic;
        }

        const pipeline = [
            {
                $match: matchQuery
            },
            {
                $group: {
                    _id: {
                        subject: "$subject",
                        topic: "$topic"
                    },
                    items: { $push: "$$ROOT" }
                }
            },
            {
                $sort: {
                    "_id.subject": 1,
                    "_id.topic": 1
                }
            },
            {
                $group: {
                    _id: "$_id.subject",
                    topics: {
                        $push: {
                            topic: "$_id.topic",
                            items: "$items"
                        }
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ];

        const subjectData = await SubjectModel.aggregate(pipeline);

        res.status(200).send({
            status: 200,
            message: "Successfully retrieved subjects and topics grouped",
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


const subjectTopics = async (req, res) => {
    try {
        const { subject } = req.query;

        let query = {};
        if (subject) query.subject = subject;

        const subjectData = await SubjectModel.find().distinct('subject');
        const topicData = await SubjectModel.find(query).distinct('topic');

        const subjectTopics = { subjects: subjectData, topics: topicData };

        res.status(200).send({
            status: 200,
            message: "Successfully retrieved subjects and topics.",
            data: subjectTopics
        });

    } catch (error) {
        console.error("Failed to get data:", error);
        res.status(500).send({
            status: 500,
            message: "Failed to retrieve subject data. Please try again later."
        });
    }
};


// const subjectAndItsTopics = async (req, res) => {
//     try {
//         const subjectData = await SubjectModel.aggregate([
//             {
//                 $group: {
//                     _id: "$subject",
//                     topics: { $addToSet: "$topic" }
//                 }
//             },
//             {
//                 $sort: { _id: 1 }
//             }
//         ]);

//         res.status(200).send({
//             status: 200,
//             message: "Successfully retrieved subjects and topics.",
//             data: subjectData
//         });
//     } catch (error) {
//         console.error("Failed to get data:", error);
//         res.status(500).send({
//             status: 500,
//             message: "Failed to retrieve subject data. Please try again later."
//         });
//     }
// };

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

export { getAllsubject, getOneSubject, addSubject, subjectTopics, getGroupSubject }