//
// Rethabile Siase
// Purpose: demonstrate basic useContext() hook in react
//

import Component4 from "./Component4.jsx";
import { UserContext } from "./Component1.jsx";
import React, { useContext } from "react";
function Component3() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component 3</h1>
      <h2>Dumelang {user}</h2>
      <Component4 />
    </div>
  );
}

export default Component3;
