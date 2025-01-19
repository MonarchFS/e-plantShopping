import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItems = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleUpdateQuantity = (name, quantity) => {
        dispatch(updateQuantity({ name, quantity }));
    };

    return (
        <div>
            {items.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                items.map(item => (
                    <div key={item.name}>
                        <h2>{item.name}</h2>
                        <p>Unit Cost: ${item.cost}</p>
                        <p>Total: ${item.cost * item.quantity}</p>
                        <button onClick={() => handleUpdateQuantity(item.name, item.quantity + 1)}>+</button>
                        <button onClick={() => handleUpdateQuantity(item.name, item.quantity - 1)}>-</button>
                        <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartItems;