import React ,{useState,createContext} from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext=createContext()
import Component2 from './Component2'
function Component1(){
    const [message]=useState("Hello,World!");

    return (
        <div className="box">
            <h1>{message} from component1</h1>
            
            <MessageContext.Provider value={message}>
              <Component2/>  
            </MessageContext.Provider>
        </div>
    )
}
export default Component1;