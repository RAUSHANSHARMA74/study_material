import React, { useEffect, useState } from 'react'
import "./Home.css"

const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const subjectData = async () => {
        try {
            let res = await fetch(`${apiKey}/subject`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const apiData = await res.json();
            setData(apiData);
            console.log(apiData);
        } catch (error) {
            setError(error.message);
            console.error("Something went wrong while fetching:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        subjectData();
    }, []);


    return (
        <div className="home">
            <select name="" id="subjects" className='subject'>
                <option value="" disabled>Subjects</option>
                <option value="" >Math</option>
                <option value="">Reasoning</option>
                <option value="">Hindi</option>
                <option value="">English</option>
                <option value="">G.k</option>

            </select>

            <select name="" id="topics" className='subject'>
                <option value="" disabled>Topics</option>
            </select>
            <span className='subject_name'>Subject</span>
            <span className='topic_name'>Topic</span>


            <div className="videos">
                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>


                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>

                <iframe
                    // width="560"
                    height="200"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>


            </div>

        </div>
    )
}
