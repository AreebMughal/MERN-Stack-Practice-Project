import React from 'react';
import PostedJobList from '../posted-jobs/PostedJobList';

const EmployerJobs = () => {
    return (
        <div className="w-full h-auto min-h-max md:w-9/12 mx-2 ml-0 pl-0  border-l-2 border-gray-200">
            <PostedJobList />
        </div>
    );
}

export default EmployerJobs;
