import React, { createContext, useState} from 'react'

export const DataContext = createContext(null);

export const DataContextProvider = (props) => {
    
    let [data, setData] = useState([]);

    const changeData = (data) => {
      setData(data);

      console.log(data);
    }

    const contextValue = {data, setData, changeData};


  return (
    <DataContext.Provider value ={contextValue}>
        {props.children}
    </DataContext.Provider>
    )
}
