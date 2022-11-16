import React, { useState } from 'react';
import { useRef } from 'react';

const JobTitle = () => {
    const [title, setTitle] = useState('');
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
