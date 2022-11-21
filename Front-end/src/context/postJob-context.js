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
    setCompanyUrl: () => { },
    price: '',
    setPrice: () => { },
    isRemote: '',
    setIsRemote: () => { },
    getAll: () => { },
});

export const PostJobContextProvider = (props) => {
    const [title, setTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState(null);
    const [description, setDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');
    const [price, setPrice] = useState('');
    const [isRemote, setIsRemote] = useState(false);

    const getSkills = () => {
        return skills.map(skill => skill.value);
    }

    const getAllFields = () => {
        return { title, jobType, location, skills: getSkills(), price, description, companyName, companyUrl, isRemote };
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
            isRemote, setIsRemote
        }}>
            {props.children}
        </PostJobContext.Provider>
    );
}

export default PostJobContext;
