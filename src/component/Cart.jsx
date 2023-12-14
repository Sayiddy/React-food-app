export default function Cart({ cartItems }) {
    let items = cartItems;
    console.log(items[0].name +" - "+items[0].quantity+" x $"+items[0].price)

    return(
        <div className="modal">
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {items.map((item)=>{
                        <li className="cart-item">
                            <p>
                                {item.name} - {item.quantity} x ${item.price}
                            </p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
};
