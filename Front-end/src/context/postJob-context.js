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
    setAll: (data) => { },
    jobId: null,
});

const options = [
    { value: "python", label: "🦊 Python" },
    { value: "php", label: "🦋 PHP" },
    { value: "html", label: "🐝 HTML" },
    { value: "css", label: "🐝 CSS" },
    { value: "javascript", label: "🐝 JavaScript" },
    { value: "react", label: "🐝 React" },
];

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
    const [jobId, setJobId] = useState(null);

    const getSkills = () => {
        return skills.map(skill => skill.value);
    }

    const getMultiSelectSkills = (skills) => {
        return options.filter((opt) => skills.includes(opt.value));
    }

    const getAllFields = () => {
        return { title, jobType, location, skills: getSkills(), price, description, companyName, companyUrl, isRemote };
    }

    const setAll = (data) => {
        // console.log('setAll', data);
        setTitle(data.title);
        setJobType(data.jobType);
        setLocation(data.location);
        setSkills(getMultiSelectSkills(data.skills));
        setPrice(data.price);
        setDescription(data.description);
        setCompanyName(data.companyName);
        setCompanyUrl(data.companyUrl);
        setIsRemote(data.isRemote);
        setJobId(data._id);
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
            isRemote, setIsRemote,
            setAll, jobId,
        }}>
            {props.children}
        </PostJobContext.Provider>
    );
}

export default PostJobContext;
