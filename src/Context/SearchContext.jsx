import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null);

export const SearchContextProvider = (props) => {
    const [search, setSearch] = useState('');

    const modifySearch = (inputValue) => {
        setSearch(inputValue);
    }

    const clearSearch = () => {
        setSearch('');
    }

    const getSearch = () => {
        if(search){
            return search;
         }else{
            return '';
         }
    }

    const contextValue = {modifySearch, clearSearch, getSearch};

  return (
        <SearchContext.Provider value={contextValue}>
            {props.children}
        </SearchContext.Provider>
    )
}
