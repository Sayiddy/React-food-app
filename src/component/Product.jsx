export default function Product({imgUrl, foodTitle, price, desc, onCart}) {  
    return (
        <div className="meal-item">
            <img src={imgUrl} alt="food" />
            <h3>{foodTitle}</h3>
            <p className="meal-item-price">{"$" + price}</p>
            <p className="meal-item-description">{desc}</p>
            <button className="meal-item-actions button" onClick={()=>{onCart(foodTitle, price, 0)}}>Add to Cart</button>
        </div>
    )
};
