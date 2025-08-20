//
// Rethabile Siase
// Purpose: demonstrate basic useContext() hook in react
//

import { UserContext } from "./Component1.jsx";
import React,{useContext} from 'react'
function Component4() {
    const user=useContext(UserContext);
  return (
    <div className="box">
      <h1>Component 4</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}

export default Component4;
