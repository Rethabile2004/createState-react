import { MessageContext } from "./Component1";
import React ,{useContext} from 'react'
import Component4 from "./Component4";

function Component3(){
    const message = useContext(MessageContext);

    return (
        <div className="box">
            <h3>{message} from Component 3</h3>
            <Component4/>
        </div>
    )
}

export default Component3;