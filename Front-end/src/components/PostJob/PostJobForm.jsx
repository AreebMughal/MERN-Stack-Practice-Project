import React, { useEffect } from 'react';
import JobTitle from './JobTitle';
import JobType from './JobType';
import Location from './Location';
import SkillMultiSelect from './SkillMultiSelect';
import Description from './Description';
import CompanyData from './CompanyData';
import Price from './Price';
import SubmitForm from './SubmitForm';
import RemoteCheckbox from './RemoteCheckbox';
import PostJobContext from '../../context/postJob-context';
import { useContext } from 'react';

const PostJobForm = (props) => {
    const postJobContext = useContext(PostJobContext);

    useEffect(() => {
        if (props.locationState) {
            console.log("state", props.locationState);
            postJobContext.setAll(props.locationState);
        }
    }, [props.locationState])

    return (
        <>
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
                            <RemoteCheckbox
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
            <SubmitForm
                isUpdate={props.locationState ? true : false}
            />
        </>
    );
}

export default PostJobForm;
