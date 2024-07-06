import express from "express"
const subject = express.Router()
import { getAllsubject, getOneSubject, addSubject } from "../controller/subject.controller.js"

subject.get("/", getAllsubject);
subject.get("/filter", getOneSubject);
subject.post("/", addSubject);

export { subject }
