export default function Cart({ cartItems }) {
    let items = cartItems;

    return(
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
    )
};
