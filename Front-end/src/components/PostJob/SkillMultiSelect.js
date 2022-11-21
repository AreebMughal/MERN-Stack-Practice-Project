import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import PostJobContext from '../../context/postJob-context';

const options = [
    { value: "python", label: "🦊 Python" },
    { value: "php", label: "🦋 PHP" },
    { value: "html", label: "🐝 HTML" },
    { value: "css", label: "🐝 CSS" },
    { value: "javascript", label: "🐝 JavaScript" },
    { value: "react", label: "🐝 React" },
];


const SkillMultiSelect = () => {
    const { skills, setSkills } = useContext(PostJobContext);

    const handleChange = (value) => {
        console.log(value);
        setSkills(value);
        // provider.setSk
    };

    // useEffect(() => {
    //     setSkills(null);
    // }, [])
    return (
        <div >
            <Select
                value={skills}
                onChange={handleChange}
                options={options}
                isMultiple={true}
                isSearchable={true}
                isClearable={true}
                noOptionsMessage={'No option found'}
                placeholder={'Select skills required for the job...'}
            />
        </div>
    );
}

export default SkillMultiSelect;
