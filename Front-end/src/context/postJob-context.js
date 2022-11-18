import React, { createContext, useEffect, useState } from 'react';

const PostJobContext = createContext({
    title: '',
    setTitle: () => { },
    jobType: '',
    setJobType: () => { },
    location: '',
    setLocation: () => { },
    skills: '',
    setSkills: () => { },
    description: '',
    setDescription: () => { },
    companyName: '',
    setCompanyName: () => { },
    companyUrl: '',
    price: '',
    setPrice: () => { },
    setCompanyUrl: () => { },
    getAll: () => { },
});

export const PostJobContextProvider = (props) => {
    const [title, setTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState([]);
    const [description, setDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [price, setPrice] = useState('');

    // useEffect(() => {
    //     console.log(getAllFields())
    // }, []);
    // console.log(title);

    const handleChangeMultiSelect = (value) => {
        setSkills(value);
    }

    const getAllFields = () => {
        // console.log('yes', value);
        // console.log('as', title);
        return [title, jobType, location, skills, price, description, companyName, companyUrl];
    }


    return (
        <PostJobContext.Provider value={{
            getAll: getAllFields,
            title, setTitle,
            jobType, setJobType,
            location, setLocation,
            skills, setSkills,
            price, setPrice,
            description, setDescription,
            companyName, setCompanyName,
            companyUrl, setCompanyUrl,
        }}>
            {props.children}
        </PostJobContext.Provider>
    );
}

export default PostJobContext;
