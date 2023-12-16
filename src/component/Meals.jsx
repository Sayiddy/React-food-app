import Product from "./product"

export default function Meals({ data, onAddCart}) {
    return(
        <div id="meals">
            {data ? data.map((meal)=>{
                return <Product 
                    key={meal.id} 
                    imgUrl={meal.image} 
                    foodTitle={meal.name} 
                    price={meal.price} 
                    desc={meal.description}
                    onCart={onAddCart}
                />
            })
            :
                <div className="text-button">Loading Meals</div>
            }
        </div>
    )
};
