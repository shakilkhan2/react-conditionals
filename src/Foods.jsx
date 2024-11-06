import { useState } from "react";
import "./Foods.css";
const Foods = ({ food, handleBoughtItems }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = food;
  const [bought, setBought] = useState(false);

  const handleBuyNow = () => {
    setBought(!bought);
    handleBoughtItems(food);
  };

  return (
    <div className="food-card">
      <h2>{strCategory}</h2>
      <img src={strCategoryThumb} alt="" />
      <p>{strCategoryDescription}</p>
      <button onClick={handleBuyNow} disabled={bought}>
        {bought ? "Bought" : "Buy Now"}
      </button>
    </div>
  );
};

export default Foods;
