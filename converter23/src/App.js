 import React, { useState } from "react";
   import MainNum from "./MainNum";

   function Main() {
     const [count, setCount] = useState(0);

     const handleCounter = (number) => {
       setCount(count + number);
     };

     return (
       <div>
         <h1>Counter</h1>
         <button onClick={() => handleCounter(1)}>+</button>
         <button onClick={() => handleCounter(-1)}>-</button>
         <MainNum count={count} />
       </div>
     );
   }

   export default Main;