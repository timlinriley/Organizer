import React from 'react'

const GroceriesPage = (props) => {
  return (
    <div>
            <h1>Grocery List</h1>
     <button><a href="/groceries/new">Add a Grocery item to the list</a></button>
     <ul>
     {props.groceries.map((product, i)=>{
        return(
        <li>{product.product} {" "} {product.brand} {" "} {product.quantity}
        <button><a href={`/todos/${todo._id}/edit`}>Update</a></button>
        <form action={`/todos/${todo._id}?_method=DELETE`} METHOD="POST">
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