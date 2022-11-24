import React from 'react';
import JobTitle from '../components/PostJob/JobTitle';
import JobType from '../components/PostJob/JobType';
import '../components/PostJob/post-job.css';
import SkillMultiSelect from '../components/PostJob/SkillMultiSelect';
import Location from '../components/PostJob/Location';
import Description from '../components/PostJob/Description';
import { PostJobContextProvider } from '../context/postJob-context';
import CompanyData from '../components/PostJob/CompanyData';
import SubmitForm from '../components/PostJob/SubmitForm';
import AlertError from '../components/alerts/AlertError';
import Price from '../components/PostJob/Price';
import AlertSuccess from './../components/alerts/AlertSuccess';
import PostJobForm from '../components/PostJob/PostJobForm';
import { useLocation } from 'react-router-dom';

const PostJob = () => {
    const location = useLocation();


    return (
        <PostJobContextProvider>
            <main className="main bg-slate-300 px-6 md:px-16 py-6">

                <div className="w-full max-w-xl mx-auto bg-white rounded-lg py-4 px-6">
                    <form method="post">

                        <h1 className="text-2xl mb-2 text-center">
                            {location.state ? "Update Posted Job" : 'Post a New Job'}

                        </h1>
                        <AlertError />
                        <AlertSuccess />
                        <PostJobForm
                            locationState={location.state ?? null}
                        />

                    </form>
                </div>
            </main>
        </PostJobContextProvider>
    );
}

export default PostJob;
