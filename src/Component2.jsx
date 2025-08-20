//
// Rethabile Siase
// Purpose: demonstrate basic useContext() hook in react
//

import Component3 from './Component3.jsx'
import { UserContext } from './Component1.jsx';
import React,{useContext} from 'react';

function Component2(){
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component 2</h1>
            <h2>Hi! hi! {user}</h2>
            <Component3/>
        </div>
    )
}

export default Component2;