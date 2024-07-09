import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Api } from '../../Api/Api';
import { getApi } from '../../Api/Api';
import { toast, ToastContainer } from 'react-toastify';
import { toastMessage } from '../../Api/Api';



export default function Home() {
    const { SubjectGroup, SubjectTopics } = Api;
    const [loading, setLoading] = useState(true);
    const [subjectandtopic, setSubjectandtopic] = useState(null);
    const [subjectsTopicsName, setSubjectsTopicsName] = useState({});
    const [selectSubjectAndTopic, setSelectSubjectAndTopic] = useState({
        subject: "",
        topic: "",
    });

    const handleSubjectAndTopicChange = (e) => {
        const { id, value } = e.target;
        if (id == "subject") selectSubjectAndTopic.topic = ""
        setSelectSubjectAndTopic((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    useEffect(() => {
        const fetchSubjectAndTopic = async () => {
            try {
                setLoading(true);
                let { subject, topic } = selectSubjectAndTopic;
                let api = SubjectGroup
                if (subject && topic) {
                    api += `?subject=${subject}&topic=${topic}`
                } else if (topic) {
                    api += `?topic=${topic}`
                } else if (subject) {
                    console.log(subject, topic, "form under");
                    let getSubjectAndTopic = await getApi(`${SubjectTopics}?subject=${subject}`);
                    setSubjectandtopic(getSubjectAndTopic);
                    // toastMessage(getSubjectAndTopic.message)
                    api += `?subject=${subject}`
                }

                let getSubjectByGroup = await getApi(api);
                setSubjectsTopicsName(getSubjectByGroup);
                // toastMessage(getSubjectByGroup.message)


            } catch (error) {
                console.log("Something went wrong:", error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchSubjectAndTopic();
    }, [selectSubjectAndTopic]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                let getSubjectByGroup = await getApi(SubjectGroup);
                let getSubjectAndTopic = await getApi(SubjectTopics);
                // toastMessage(getSubjectAndTopic.message)
                // toastMessage(getSubjectByGroup.message)
                setSubjectsTopicsName(getSubjectByGroup);
                setSubjectandtopic(getSubjectAndTopic);
            } catch (error) {
                console.log("Something went wrong:", error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchInitialData();
    }, []);


    // console.log(subjectsTopicsName)
    return (
        <div className="home">
            <ToastContainer />
            <select name="subjects" id="subject" className='subject'
                onChange={handleSubjectAndTopicChange}
                value={selectSubjectAndTopic.subject}>
                <option value="" disabled>Subjects</option>
                {subjectandtopic?.data?.subjects?.map((elm, index) => (
                    <option value={elm} key={index}>{elm}</option>
                ))}
            </select>

            <select name="topics" id="topic" className='subject'
                onChange={handleSubjectAndTopicChange}
                value={selectSubjectAndTopic.topic}
            >
                <option value="" disabled>Select a topic</option>
                {subjectandtopic?.data?.topics?.map((elm, index) => (
                    <option value={elm} key={index}>{elm}</option>
                ))}
            </select>

            {loading ? (<div className="parent_loader">
                <div className="custom-loader"></div>
            </div>) : (
                subjectsTopicsName.data?.map((subject, subjectIndex) => (
                    <div key={`subject-${subjectIndex}`}>
                        <div className='subject_name_container'>
                            <span className='subject_name'>
                                {subject._id} - {subject.topics.length} topics
                            </span>
                        </div>
                        {subject.topics.map((topic, topicIndex) => (
                            <div key={`topic-${subjectIndex}-${topicIndex}`}>
                                <span className='topic_name'>
                                    {topic.topic} - {topic.items.length} videos
                                </span>
                                <div className="videos">
                                    {topic.items.map((item, itemIndex) => (
                                        <iframe
                                            key={`video-${subjectIndex}-${topicIndex}-${itemIndex}`}
                                            height="200"
                                            src={item.url}
                                            frameBorder="0"
                                            allow="fullscreen"
                                        ></iframe>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}







        </div>
    )
}
