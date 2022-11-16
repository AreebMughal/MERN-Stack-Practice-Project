import React, { useState } from 'react';
import { useRef } from 'react';

const CompanyData = () => {
    const [companyName, setCompanyName] = useState('');
    const companyNameRef = useRef();

    const [companyUrl, setCompanyUrl] = useState('');
    const companyUrlRef = useRef();

    const handleChangeCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const handleChangeCompanyUrl = (e) => {
        setCompanyUrl(e.target.value);
    }

    return (
        <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label htmlFor="company" className="block text-gray-700 text-sm mb-2">Company</label>
                <input type="text" id="company" name="company" placeholder="Company"
                    className="post-job-fields"
                    ref={companyNameRef}
                    value={companyName}
                    onChange={handleChangeCompanyName}
                />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label htmlFor="company" className="block text-gray-700 text-sm mb-2">Company Website</label>
                <input type="text" id="company" name="company"
                    placeholder="https://www.djangoproject.com/"
                    className="post-job-fields"
                    ref={companyUrlRef}
                    value={companyUrl}
                    onChange={handleChangeCompanyUrl}
                />
            </div>
        </div>
    );
}

export default CompanyData;
