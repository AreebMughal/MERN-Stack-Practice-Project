import React, { useState } from 'react';

const options = ['Full-time', 'Part-time', 'Freelance', 'Contract'];

const JobType = () => {

    const [jobType, setJobType] = useState(options[0]);

    const handleChangeJobType = (e) => {
        setJobType(e.target.value);
    }

    return (
        <>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="job-type">
                Job Type
            </label>
            <div className="relative">
                <select className="post-job-fields" id="job-type" name="job-type" value={jobType} onChange={handleChangeJobType}>
                    {options.map(opt =>
                        <option key={opt}>
                            {opt}
                        </option>
                    )}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </>
    );
}

export default JobType;
