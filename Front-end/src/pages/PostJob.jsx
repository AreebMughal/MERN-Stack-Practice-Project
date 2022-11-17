import React from 'react';
import JobTitle from '../components/PostJob/JobTitle';
import JobType from '../components/PostJob/JobType';
import '../components/PostJob/post-job.css';
import SkillMultiSelect from '../components/PostJob/SkillMultiSelect';
import Location from '../components/PostJob/Location';
import Checkbox from '../components/general/Checkbox';
import Description from '../components/PostJob/Description';

const PostJob = () => {


    return (
        <>
            <main className="main bg-slate-300  px-6 md:px-16 py-6">
                <div className="w-full max-w-xl mx-auto bg-white rounded-lg py-4 px-6">
                    <form method="post">
                        <h1 className="text-2xl mb-2 text-center">Post new job</h1>

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



                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <input type="text" name="price" id="price" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 pl-6 mb-3 leading-tight focus:outline-none focus:border-gray-500" placeholder="0.00" />
                                    <div className="absolute inset-y-0 right-0 flex items-center border border-gray-400 rounded-r">
                                        <label htmlFor="currency" className="sr-only">Currency</label>
                                        <select id="currency" name="currency" className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-gray-500  sm:text-sm outline-none">
                                            <option>USD</option>
                                            {/* <option>CAD</option>
                                            <option>EUR</option> */}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 md:mb-0">
                                <label htmlFor="company-logo" className="block text-gray-700 text-sm mb-2">Logo Image</label>
                                <input type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo" />
                            </div>
                        </div>
                        <div className='w-full flex justify-end'>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded max-sm:w-full">Create job</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default PostJob;
