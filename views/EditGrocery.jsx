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
    const formStyle = {
        marginTop: "20px",
        fontWeight: "bold"
    }

    const inputStyle = {
        margin: "8px"
    }
  return (
    <div>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <form style={formStyle} action={`/groceries/${props.grocery._id}?_method=PUT`} method="POST">
        Product:<input style={inputStyle} type="text" placeholder={`${props.grocery.product}`} name="product" />
        Brand:<input style={inputStyle} type="text" placeholder={`${props.grocery.brand}`} name="brand" />
       Quantity:<input style={inputStyle} type="number" placeholder={`${props.grocery.quantity}`} name="quantity" />
        <input type="submit" value="Update Grocery Item" />      
        </form> 

    </div>
  )
}

export default EditGrocery