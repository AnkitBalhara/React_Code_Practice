// //============Passing Props from Child to the Parent Component------------------------------
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const onInputChange = (value) => {
    setName(value);
  };
  return (
    <div>
      <h3>This is a Parent Component...</h3>
      <p>Calling Prop from Child components :- <strong>{name}</strong></p>

      <ChildComponent username={onInputChange} />
    </div>
  );
};

export default App;

const ChildComponent = ({ username }) => {
  return (
    <div>
        <h3>Child Component Starts....</h3>
      <input
        type="text"
        onChange={(e) => {username(e.target.value)}}/>
    </div>
  );
};

// //------------Passing props from Parent to the child Component----------------

// import React, { useState } from "react";

// const App = () => {
//     const [name, setname] = useState()
//   return <div>This is a Normal Div in the Container
//     <div>
//         <input type="text" name="" value={name} onChange={(e)=>{setname(e.target.value)}} />
//         <Props username={name}/>
//     </div>
//   </div>;
// };

// export default App;

// const Props = ({username}) => {
//   return <div>
//     <h1>{username}</h1>
//     This is a Normal Div in the Container One
//     </div>;
// };

// export { Props };
