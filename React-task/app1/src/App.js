import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="control">
          <input className="input" />
        </div>
        {data.length > 0 &&
          data.map((obj) => {
            return (
              <div className="list is-hoverable" key={obj.id}>
                {obj.message}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
