import React from 'react';

export default function ProductItem({product,onAddClick}) {
    return (<div onClick={() => onAddClick(product)}>{product.name}</div>)
}