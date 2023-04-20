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

    const background = {
        backgroundColor: "gray",
        height: "400vh"
    }

    const submitButton = {
        padding: "10px",
        border: "black",
        borderRadius: "5%",
        backgroundColor: "beige",
        marginTop: "4px",
        marginLeft: "20px",
    }
  return (
    <div style={background}>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <form style={formStyle} action={`/groceries/${props.grocery._id}?_method=PUT`} method="POST">
        Product:<input style={inputStyle} type="text" placeholder={`${props.grocery.product}`} name="product" />
        Brand:<input style={inputStyle} type="text" placeholder={`${props.grocery.brand}`} name="brand" />
       Quantity:<input style={inputStyle} type="number" placeholder={`${props.grocery.quantity}`} name="quantity" />
        <input style={submitButton} type="submit" value="Update Grocery Item" />      
        </form> 

    </div>
  )
}

export default EditGrocery