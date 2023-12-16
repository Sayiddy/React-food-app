export default function Cart({ cartItems, onClose }) {
    let items = cartItems;

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
