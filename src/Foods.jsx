import "./Foods.css"
const Foods = ({ food }) => {
    console.log(food);
    const { strCategory, strCategoryThumb, strCategoryDescription } = food;
    return (
        <div className="food-card">
            <h2>{strCategory}</h2>
            <img src={strCategoryThumb} alt="" />
            <p>{strCategoryDescription}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Foods;