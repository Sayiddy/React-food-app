import { useRef, useState } from "react";
import Product from "./component/product";
import useFetch from "./component/useFetch";
import Cart from "./component/Cart";

function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const data = useFetch("http://localhost:3000/meals")
    console.log(data)

    function onAddCart(name, price, quantity) {
        setCartItems((cartItems)=>[...cartItems, {name: name, price: price, quantity: quantity}])
    }

    function onCart() {
        setCartOpen(true)
    }

    return (
        <div>
            {cartOpen && 
                <Cart cartItems={cartItems}></Cart>
            }
            <header id="main-header">
                <h1 id="title">
                    <img src="./assets"></img>
                    REACT FOOD
                </h1>
                <button className="text-button" onClick={onCart}>cart({cartItems.length})</button>
            </header>

            <div id="meals">
                {data ? data.map((meal)=>{
                    return <Product key={meal.id} imgUrl={meal.image} foodTitle={meal.name} price={meal.price} desc={meal.description} onCart={onAddCart}></Product>
                })
                :
                    <div className="text-button">Loading Meals</div>
                }
            </div>
        
        </div>
    );
}

export default App;
