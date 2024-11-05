import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [foods, setFoods] = useState([]);
  useEffect(
    () => {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    ,[]
  );

  return (
    <>
     <h1>React Conditionals</h1>
    </>
  )
}

export default App
