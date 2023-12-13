import { useRef, useState } from "react";
import Product from "./component/product";
import useFetch from "./component/useFetch";

function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const data = useFetch("http://localhost:3000/meals")
    console.log(data)

    function onCart(name, price) {
        setCartItems((cartItems)=>[...cartItems, {name: name, price: price}])
    }
  return (
    <div>
        <header id="main-header">
            <h1 id="title">
                <img src="./assets"></img>
                REACT FOOD
            </h1>
            <button className="text-button">cart</button>
        </header>
        <div id="meals">
            {data ? data.map((meal)=>{
                return <Product key={meal.id} imgUrl={meal.image} foodTitle={meal.name} price={meal.price} desc={meal.description} onCart={onCart}></Product>
            })
            :
                <div className="text-button">Loading Meals</div>
            }
        </div>
    </div>
  );
}

export default App;
