import React, { useContext } from 'react';
import PostJobContext from '../../context/postJob-context';

const Checkbox = (props) => {
    const { isRemote, setIsRemote } = useContext(PostJobContext);

    const handleChangeCheckBox = (e) => {
        setIsRemote(!isRemote);
    }

    return (
        <>
            <label className="text-gray-600 flex items-center" htmlFor="remote">
                <input className="mr-2 leading-tight" type="checkbox" id="remote"
                    checked={isRemote}
                    onChange={handleChangeCheckBox}
                />
                <span className="text-sm">{props.title}</span>
            </label>
        </>
    );
}

export default Checkbox;
