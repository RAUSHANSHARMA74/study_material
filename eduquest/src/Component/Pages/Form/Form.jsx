import React, { useState } from 'react'
import "./Form.css"
import { Api } from '../../Api/Api';
import { postApi } from '../../Api/Api'
import { toastMessage } from '../../Api/Api';
import { toast, ToastContainer } from 'react-toastify';

export default function Form() {
    const { Addsubject } = Api;
    const [form, setForm] = useState({
        url: "",
        teacher: "",
        subject: "",
        topic: "",
        position: ""
    });

    const handleSubjectData = (e) => {
        const { id, value } = e.target
        setForm((pre) => ({
            ...pre,
            [id]: value
        }))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let addSubjectData = await postApi(Addsubject, form)
        console.log(addSubjectData);
        toastMessage(addSubjectData.message);
        setForm({
            url: "",
            teacher: "",
            subject: "",
            topic: "",
            position: ""
        })
    }

    return (
        <div className="form" onSubmit={handleFormSubmit}>
            <ToastContainer />

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
