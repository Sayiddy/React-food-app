import Product from "./product"
import useFetch from "./useFetch"

export default function Meals({ onAddCart}) {
    const data = useFetch("http://localhost:3000/meals")

    if(data == "err"){
        return (<div className="text-button">connection error, try again</div>)
    }

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
