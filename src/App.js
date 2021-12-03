import React from "react";
import { Heading } from "./Heading";
import "./Heading.css"

function App({name}) {
  return (
    <div>
     <p className="myname">Hello from <strong>{name}</strong></p>
     <Heading />
     <p className="para">Sum of 10 + 5 = {10 + 5}</p>
    </div>
  );
}

export default App;
