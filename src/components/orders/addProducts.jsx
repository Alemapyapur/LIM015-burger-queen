import React, { useState } from 'react'

function AddProducts({ productList }) {

    const [pedido, setPedido] = useState([]);
    const moreClick = (products) => {
        console.log('products', products)
        setPedido( productList)
        
    };
    

    return (
        <div className="btn--order">
            <button onClick={() => moreClick(productList)}> Agregar</button>
        </div>
    )
}

export default AddProducts
