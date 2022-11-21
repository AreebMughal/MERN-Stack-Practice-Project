import React, { useCallback, useContext, useRef, useState } from 'react';
import PostJobContext from '../../context/postJob-context';

const Description = () => {
    const { description, setDescription } = useContext(PostJobContext);
    const descriptionRef = useRef();

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    return (

        <>
            <label htmlFor="description" className="block text-gray-700 text-sm mb-2">Description</label>
            <textarea id="description"
                row={1}
                placeholder={'Detail about the job...'}
                className="post-job-fields resize-y h-28 max-h-64"
                ref={descriptionRef}
                value={description}
                onChange={handleChangeDescription}
            />
        </>
    );
}

export default Description;
