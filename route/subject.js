import express from "express"
const subject = express.Router()
import { getAllsubject, getOneSubject, addSubject } from "../controller/subject.controller.js"

subject.get("/subject", getAllsubject);
subject.get("/filter", getOneSubject);
subject.post("/subject", addSubject);

export { subject }
