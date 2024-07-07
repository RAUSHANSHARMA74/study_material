import React, { useState } from 'react'
import "./Form.css"
const apiKey = import.meta.env.VITE_API_KEY;

export default function Form() {
    const [form, setForm] = useState({
        url: "",
        teacher: "",
        subject: "",
        topic: "",
        position: ""
    })

    const handleSubjectData = (e) => {
        const { id, value } = e.target
        // console.log(id, value)
        setForm((pre) => ({
            ...pre,
            [id]: value
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        addSubject(form)
    }

    const addSubject = async (form) => {
        try {
            const res = await fetch(`${apiKey}/subject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Data added successfully:", data);
        } catch (error) {
            console.error("Something went wrong while adding data:", error);
        }
    };


    return (
        <div className="form" onSubmit={handleFormSubmit}>

            <form action="">
                <label htmlFor="">URL</label>
                <input type="link" name="link" id="url" required value={form.url} onChange={handleSubjectData} />
                <label htmlFor="">Teacher Name</label>
                <input type="text" name="" id="teacher" required value={form.teacher} onChange={handleSubjectData} />
                <label htmlFor="">Subject</label>
                <input type="text" name="" id="subject" required value={form.subject} onChange={handleSubjectData} />
                <label htmlFor="">Topic</label>
                <input type="text" name="" id="topic" required value={form.topic} onChange={handleSubjectData} />
                <label htmlFor="">Position</label>
                <input type="number" name="" id="position" required value={form.position} onChange={handleSubjectData} />
                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
    )
}
