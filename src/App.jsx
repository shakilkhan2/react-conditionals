import { useState } from "react";
import "./App.css";
import "./Foods.css";
import { useEffect } from "react";
import Foods from "./Foods";

function App() {
  const [foods, setFoods] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);

const handleBoughtItems = (food) => {
  const newBoughtItems = [...boughtItems, food];
  setBoughtItems(newBoughtItems);
  console.log(food)
}

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories));
  }, []);

  return (
    <div>
      <div>
        <h2>Bought Items: {boughtItems.length}</h2>
        <ul>
          {boughtItems.map((item) => (
            <li key={item.idCategory}>{item.strCategory}</li>
          ))}
        </ul>
      </div>
      <h2>Foods: {foods.length}</h2>
      <div className="foods-section">
        {foods.map((food) => (
          <Foods
            key={food.idCategory}
            food={food}
            handleBoughtItems={() => handleBoughtItems(food)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
