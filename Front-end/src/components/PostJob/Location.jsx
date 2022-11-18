import React from 'react';
import { useRef, useContext } from 'react';
import PostJobContext from '../../context/postJob-context';

const Location = () => {
    const { location, setLocation } = useContext(PostJobContext);
    const locationRef = useRef();

    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    }

    return (
        <>
            <label htmlFor="location" className="block text-gray-700 text-sm mb-2">Location</label>
            <input type="text" id="location" name="location" placeholder="Schwerin"
                className="post-job-fields"
                ref={locationRef}
                value={location}
                onChange={handleChangeLocation}
            />
        </>
    );
}

export default Location;
