import { MessageContext } from "./Component1";
import React, {useContext} from 'react';

function Component4(){
    const message = useContext(MessageContext);

    return (
        <div className="box">
            <h4>{message} from Component 4</h4>
        </div>

    )
}
export default Component4;


