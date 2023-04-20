import React from 'react'

const EditGrocery = (props) => {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        height: "8vh",
        paddingTop: "20px",
        fontSize: "50px"
    }

  return (

    <div>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <p>Product: {props.pantry.product} {" "} Brand: {props.pantry.brand} {" "} Quantity: {props.pantry.quantity}</p>
        <form action={`/pantry/${props.pantry._id}?_method=PUT`} method="POST">
        <input type="text" placeholder="Edit Item" name="product" />
        <input type="text" placeholder="Edit Brand" name="brand" />
       <input type="number" placeholder="Quantity" name="quantity" />
        <input type="submit" value="Update Pantry Item" />      
        </form> 

    </div>
  )
}

export default EditGrocery