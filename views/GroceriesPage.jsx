import React from 'react'

const GroceriesPage = (props) => {
  return (
    <div>
            <h1>Grocery List</h1>
     <button><a href="/groceries/new">Add a Grocery item to the list</a></button>
     <ul>
     {props.groceries.map((product, i)=>{
        return(
        <li>Item: {product.product} {" "} Brand: {product.brand} {" "} Quantity: {product.quantity}
        <button><a href={`/groceries/${product._id}/edit`}>Update</a></button>
        <form action={`/pantry/${product._id}`} METHOD="POST">
            <input type="submit" value="Purchase" />
        </form>
        <form action={`/groceries/${product._id}?_method=DELETE`} METHOD="POST">
            <input type="submit" value="DELETE" />
        </form>
        </li>
        )
     })}
     </ul>
        
    </div>
  )
}

export default GroceriesPage