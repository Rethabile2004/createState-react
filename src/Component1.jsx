import Component2 from "./Component2.jsx";
import React,{useState,createContext} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext=createContext();

function Component1(){
    // eslint-disable-next-line no-unused-vars
    const [user,setUser]=useState("Rethabile");
    // did not use setUser() because I wanted to focus on using useState()
    return (
        <div className="box">
            <h1>Component 1</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>
            <Component2/>    
            </UserContext.Provider>
        </div>
    )
}

export default Component1;