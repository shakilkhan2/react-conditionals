import { useState } from "react";
import "./App.css";
import "./Foods.css";
import { useEffect } from "react";
import Foods from "./Foods";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories));
  }, []);

  return (
    <>
      <h1>Foods: {foods.length}</h1>
      <div className="foods-section">
        {foods.map((food) => (
          <Foods key={food.idCategory} food={food} />
        ))}
      </div>
    </>
  );
}

export default App;
