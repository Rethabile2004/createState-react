import { MessageContext } from "./Component1";
import React,{useContext} from 'react';
import Component3 from "./Component3";

function Component2(){
    const message= useContext(MessageContext)
    return (
        <div className="box">
            <h1>{message} from component 2</h1>
            <Component3/>
        </div>
    )
}
export default Component2;