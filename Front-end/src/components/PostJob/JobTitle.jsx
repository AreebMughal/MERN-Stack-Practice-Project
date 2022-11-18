import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import PostJobContext from '../../context/postJob-context';
import SubmitForm from './SubmitForm';

const JobTitle = () => {
    const { title, setTitle, getAll } = useContext(PostJobContext);
    const titleRef = useRef();
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    return (
        <>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="job-title">Title</label>
            <input type="email" id="job-title" name="job-title"
                placeholder="Frontend Developer" autoFocus={true}
                className="post-job-fields"
                ref={titleRef}
                value={title}
                onChange={handleChangeTitle}
            />
        </>
    );
}

export default JobTitle;
