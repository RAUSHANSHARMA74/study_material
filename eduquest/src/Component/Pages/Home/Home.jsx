import React from 'react'
import "./Home.css"

export default function Home() {
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

            <spen className='subject_name'>Subject</spen>
            <spen className='topic_name'>Topic</spen>

            <div class="">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/e8TGbF4o8xU"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>


            <div className="videos">


            </div>

        </div>
    )
}
