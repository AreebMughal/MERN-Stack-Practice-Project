
import React, { createContext, useState } from 'react';


const AlertContext = createContext({
    isVisible: false,
    setIsVisible: () => { }
});


export const AlertContextProvider = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <AlertContext.Provider value={{ isVisible, setIsVisible }}>
            {props.children}
        </AlertContext.Provider>
    );
}


export default AlertContext;