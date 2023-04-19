import React from 'react'

const PantryPage = (props) => {
  return (
    <div>
                    <h1>What we have</h1>
     <button><a href="/pantry/new">Purchased somehing? Add it to this list</a></button>
     <ul>
     {props.items.map((item, i)=>{
        return(
        <li>Item: {item.product} {" "} Brand: {item.brand} {" "} Quantity: {item.quantity} {" "} Expiration: {item.expiration}
        {/* <button><a href={`/groceries/${product._id}/edit`}>Update</a></button>
        <form action={`/pantry/${product._id}`} METHOD="POST">
            <input type="submit" value="Purchase" />
        </form>
        <form action={`/groceries/${product._id}?_method=DELETE`} METHOD="POST">
            <input type="submit" value="DELETE" />
        </form> */}
        </li>
        )
     })}
     </ul>
    </div>
  )
}

export default PantryPage