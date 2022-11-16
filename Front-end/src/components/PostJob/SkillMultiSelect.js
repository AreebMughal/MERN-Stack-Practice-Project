import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
    { value: "python", label: "🦊 Python" },
    { value: "php", label: "🦋 PHP" },
    { value: "html", label: "🐝 HTML" },
    { value: "css", label: "🐝 CSS" },
    { value: "javascript", label: "🐝 JavaScript" },
    { value: "react", label: "🐝 React" },
];


const SkillMultiSelect = () => {
    const [animal, setAnimal] = useState([]);

    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <div >
            <Select
                value={animal}
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
