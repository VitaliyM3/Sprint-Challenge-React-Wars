import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./character";


function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(res => setData(res.data.results));
    
    
    // console.log("this is the response data", data);
    

  }, []);

  if (data === null) return <div>Getting data...</div>;
  console.log("this is the response data", data);




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {/* <Characters textContent={ data }></Characters> */}

      <div>
        {data.map(textContent => (
          <Characters textContent={ textContent }></Characters>
          // console.log(textContent)
        ))}
      </div>

    </div>
  );
}

export default App;
