import { useRef, useState } from "react";
import Product from "./component/product";
import useFetch from "./component/useFetch";
import Cart from "./component/Cart";
import Modal from "./component/Modal";
import Meals from "./component/Meals";

function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const data = useFetch("http://localhost:3000/meals")
    console.log(data)

    function onAddCart(name, price, quantity) {
        let alreadyAdded = false;
        for (let i = 0; i < cartItems.length; i++) {
            const element = cartItems[i];
            if (element.name == name){
                alreadyAdded = true
            }
        }
        if (alreadyAdded) {
            const nextCartItems = cartItems.map((c) => {
                if (c.name == name) {
                    return {name: c.name, price: c.price, quantity: c.quantity + 1};
                } else {
                    return c;
                }
            });
            setCartItems(nextCartItems)
        }else{
            setCartItems((cartItems)=>[...cartItems, {name: name, price: price, quantity: quantity}])
        }
    }

    function onCart() {
        setCartOpen(true)
    }

    function onCartClose() {
        setCartOpen(false)
    }

    return (
        <div>
            <Modal open={cartOpen} onClose={onCartClose}>
                <Cart cartItems={cartItems} onClose={onCartClose} setCartItems={setCartItems} key={cartItems}/>
            </Modal>

            <header id="main-header">
                <h1 id="title">
                    <img src="http://localhost:5173/src/assets/logo.jpg"></img>
                    REACT FOOD
                </h1>
                <button className="text-button" onClick={onCart}>cart({cartItems.length})</button>
            </header>

            <Meals data={data} onAddCart={onAddCart}/>
        </div>
    );
}

export default App;
