import { useState } from 'react';
import {createContext} from 'react';

const DataContext = createContext();
const initialData = [];


const Data = ({children}) => {
    const [dentists, setDentists] =useState(initialData);
    const data = {dentists, setDentists};

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default DataContext;
export {Data};