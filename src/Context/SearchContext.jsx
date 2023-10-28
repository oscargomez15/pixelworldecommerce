import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null);

export const SearchContextProvider = (props) => {
    const [search, setSearch] = useState('');

    const modifySearch = (inputValue) => {
        setSearch(inputValue);
    }

    const resetSearch = () => {
        setSearch('');
    }

    const getSearch = () => {
        if(search){
            return search;
         }else{
            return '';
         }
    }

    const contextValue = {modifySearch, resetSearch, getSearch};

  return (
        <SearchContext.Provider value={contextValue}>
            {props.children}
        </SearchContext.Provider>
    )
}
