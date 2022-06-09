import { createContext, useState } from 'react';
import React from 'react';

const defaultValue={id: 0, name: "", birthdate:"2022-06-07T21:16:55.35"}  
export const UserContext = createContext(defaultValue);
interface Props {
    children: JSX.Element | JSX.Element
}
export interface User {
    id: number; 
    name: string;
    birthdate: String;
  }

export const UserProvider=({children}:Props)=>{
    const [data, setData]=useState<User>(defaultValue);
    return(
        <UserContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </UserContext.Provider>
    )
}