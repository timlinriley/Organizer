import React from 'react'

const NewGrocery = () => {
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
        fontWeight: "bold",
        border: "solid black",
        padding: "10px",
        backgroundColor: "lightgray"
        
    }
    const inputStyle = {
        margin: "8px"
    }
    const submitButton = {
        padding: "10px",
        border: "black",
        borderRadius: "5%",
        backgroundColor: "green",
        fontWeight: "bold",
        marginTop: "4px",
        marginLeft: "20px",
    }
    const background = {
        backgroundColor: "gray",
        height: "400vh"
    }
  return (
    <div style={background}>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
            <h2>Add a purchased item to your pantry list</h2>
        <form style={formStyle} action="/pantry" method="POST">
            <input style={inputStyle} type="text" placeholder="Add purchased item" name="product" />
            <input style={inputStyle} type="text" placeholder="Specific Brand?" name="brand" />
            <input style={inputStyle} type="number" placeholder="Quantity" name="quantity" />
            <input style={inputStyle} type="date" placeholder="Estimated Expiration date" name="expiration" />
            <input style={submitButton} type="submit" value="Add Purchased Item" />
        </form>   
    </div>
  )
}
module.exports = NewGrocery;