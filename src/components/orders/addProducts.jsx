import React from 'react'
import "../../styles/pages/waiter.css"

function AddProducts({ productList, pedido , setPedido }) {

    
    const moreClick = (products) => {
        console.log('products', products)
        setPedido([...pedido, products])
    };
    

    return (
        <div>
            <button className="btn--order" onClick={() => moreClick(productList)}> Agregar</button>
        </div>
    )
}

export default AddProducts


