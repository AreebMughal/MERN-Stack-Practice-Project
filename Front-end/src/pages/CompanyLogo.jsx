import React from 'react';

const CompanyLogo = () => {
    return (
        <>
            <label htmlFor="company-logo" className="block text-gray-700 text-sm mb-2">Logo Image</label>
            <input type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo" />
        </>
    );
}

export default CompanyLogo;
