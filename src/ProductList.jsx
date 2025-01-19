import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
    const plantsArray = [
        { name: 'Aloe Vera', cost: 20, description: 'A succulent plant...', imageUrl: '...' },
        // Add more plants
    ];
    const dispatch = useDispatch();

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((plant) => (
                <div className="plant-card" key={plant.name}>
                    <img src={plant.imageUrl} alt={plant.name} />
                    <h2>{plant.name}</h2>
                    <p>{plant.description}</p>
                    <p>${plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;