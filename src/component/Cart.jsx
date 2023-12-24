export default function Cart({ cartItems, onClose, setCartItems, totalPrice}) {

    if (cartItems.length == 0){
        return (
            <div className="cart">
                <h2>
                    You havent selected anything.
                </h2>
                <button className="button" onClick={onClose}>Go Back</button>
            </div>
        )
    }

    function incrementAndDecrement(name, increment) {
        const nextCartItems = cartItems.map((c) => {
            if (c.name == name) {
                return {name: c.name, price: c.price, quantity: increment ? c.quantity + 1 : c.quantity - 1};
            } else {
                return c;
            }
        });
        setCartItems(nextCartItems)
    }

    function calcPrice(){
        let price = 0;
        for (let i = 0; i < cartItems.length; i++) {
            const mealPrice = (cartItems[i].price + 0.01) * cartItems[i].quantity
            console.log(mealPrice)
            price += mealPrice
        }
        totalPrice.current = price;
        return price;
    }

    return(
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item)=>{ return(
                    <li className="cart-item" key={item.name}>
                        <p>
                            {item.name} - {item.quantity} x ${item.price}
                        </p>

                        <div className="cart-item-actions">
                            <button onClick={()=>{incrementAndDecrement(item.name, false)}}>-</button>
                                {item.quantity}
                            <button onClick={()=>{incrementAndDecrement(item.name, true)}}>+</button>
                        </div>
                    </li>
                )})}
            </ul>

            <p className="cart-total">${calcPrice()}</p>

            <div className="modal-actions">
                <button className="text-button" onClick={onClose}>Cancel</button>
                <button className="button" onClick={()=>{onClose(true)}}>Go To Checkout</button>
            </div>
        </div>
    )
};
