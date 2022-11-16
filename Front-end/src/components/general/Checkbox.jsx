import React, { useState } from 'react';

const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChangeCheckBox = (e) => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    }

    return (
        <>
            <label className="text-gray-600 flex items-center" htmlFor="remote">
                <input className="mr-2 leading-tight" type="checkbox" id="remote"
                    checked={isChecked}
                    onChange={handleChangeCheckBox}
                />
                <span className="text-sm">{props.title}</span>
            </label>
        </>
    );
}

export default Checkbox;
