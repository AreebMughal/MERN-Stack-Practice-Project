import React, { useContext } from 'react';
import JobTitle from '../components/PostJob/JobTitle';
import JobType from '../components/PostJob/JobType';
import '../components/PostJob/post-job.css';
import SkillMultiSelect from '../components/PostJob/SkillMultiSelect';
import Location from '../components/PostJob/Location';
import Checkbox from '../components/general/Checkbox';
import Description from '../components/PostJob/Description';
import PostJobContext, { PostJobContextProvider } from '../context/postJob-context';
import AlertContext from '../context/alert-context';
import CompanyData from '../components/PostJob/CompanyData';
import SubmitForm from '../components/PostJob/SubmitForm';
import AlertError from '../components/alerts/AlertError';
import Price from '../components/PostJob/Price';

const PostJob = () => {
    const { getAll } = useContext(PostJobContext);

    const alertContext = useContext(AlertContext);

    const handleSubmitJobPost = (e) => {
        getAll();

        // e.preventDefault();
        // const allFields = postJobContext.getAllFields();
        // console.log({ allFields });

        // allFields.forEach(field => {
        //     if (field.toString().trim()) {

        //     } else {
        //         alertContext.setErrorAlert(true, 'Missing Fields', 'Please fill out all the fields.')
        //     }
        // });
    }

    return (
        <PostJobContextProvider>
            <main className="main bg-slate-300 px-6 md:px-16 py-6">

                <div className="w-full max-w-xl mx-auto bg-white rounded-lg py-4 px-6">
                    <form method="post">

                        <h1 className="text-2xl mb-2 text-center">Post new job</h1>
                        <AlertError />
                        <div className="job-info border-b-2 py-2 mb-5">

                            <div className="mb-4">
                                <JobTitle />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="apply-link">Skills:</label>
                                <SkillMultiSelect />
                            </div>

                            <div className="md:flex md:justify-between">

                                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                                    <JobType />
                                </div>


                                <div className="w-full md:w-8/12 mb-4 md:mb-0">
                                    <Location />

                                    <div>
                                        <Checkbox
                                            title={'Work can be done remotely'}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Description />
                            </div>
                            <CompanyData />
                            <div>
                                <Price />
                            </div>

                            {/* <div className="mb-4 md:mb-0">
                                
                            </div> */}
                        </div>
                        <SubmitForm />

                    </form>
                </div>
            </main>
        </PostJobContextProvider>
    );
}

export default PostJob;
