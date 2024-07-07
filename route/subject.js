import express from "express"
const subject = express.Router()
import {
    getAllsubject,
    getOneSubject,
    addSubject,
    subjectTopics,
    getGroupSubject,
    // subjectAndItsTopics
} from "../controller/subject.controller.js"

subject.get("/subject", getAllsubject);
subject.get("/subjectTopics", subjectTopics);
subject.get("/subjectGroup", getGroupSubject);
// subject.get("/subjectGroup", subjectAndItsTopics);
subject.get("/filter", getOneSubject);
subject.post("/subject", addSubject);

export { subject }
