export default function Cart({ cartItems, onClose }) {
    let items = cartItems;

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

    return(
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {items.map((item)=>{ return(
                    <li className="cart-item" key={item.name}>
                        <p>
                            {item.name} - {item.quantity} x ${item.price}
                        </p>

                        <div className="cart-item-actions">
                            <button>-</button>
                                {item.quantity}
                            <button>+</button>
                        </div>
                    </li>
                )})}
            </ul>

            <p className="cart-total">$5</p>

            <div className="modal-actions">
                <button className="text-button" onClick={onClose}>Cancel</button>
                <button className="button">Submit</button>
            </div>
        </div>
    )
};
