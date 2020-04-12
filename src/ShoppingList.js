import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingCart( {cart,onRemoveClick} ) {

    function renderShoppingItem(product) {
        return (
            <ShoppingItem
                product={product}
                key={product.id}
                onRemoveClick={onRemoveClick}
            />
        )
    }

    return (
        <div>
            {cart.list.map(renderShoppingItem)}
        </div>
    )
    
}