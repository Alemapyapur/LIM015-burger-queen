import React from 'react'

function AddProducts({ productList, pedido , setPedido }) {

    
    const moreClick = (products) => {
        console.log('products', products)
        setPedido([...pedido, products])
        
        
    };
    

    return (
        <div className="btn--order">
            <button onClick={() => moreClick(productList)}> Agregar</button>
        </div>
    )
}

export default AddProducts


