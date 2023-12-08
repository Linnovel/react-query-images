import { useContext, createContext, useState, useEffect } from "react";

//here are the values that can be used
const AppContext = createContext(

)



//here are the functions 
export const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('cat')
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newDarkTheme)
    }

    return (<AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext)