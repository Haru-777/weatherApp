import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios';
import './App.css';
import './PersonList.jsx';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5a9a322e5cd5e0bb3bcc11a871c2967b",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">
      <div>

          <div key={list.id}><h1>{list.id}</h1>
            <h3>{list.name}</h3>
            <p>{list.cod}</p>
          </div>
      </div>
    </div>
  );
}

export default App
