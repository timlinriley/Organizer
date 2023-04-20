import React from 'react'

const GroceriesPage = (props) => {

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
    const listItem = {
        display: "flex",
        padding: "10px",
        margin: "8px"
    }
    const inputStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        padding: "10px",
        fontWeight: "bold",
    }
    const deleteStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        padding: "10px",
        fontWeight: "bold",
        backgroundColor: "red"
    }
    const itemStyle = {
        border: "solid black",
        margin: "2px",
        backgroundColor: "darkgray",
        fontSize: "20px"
  
    }
    const buttons = {
        display: "flex",
        alignSelf: "end",
        marginLeft: "280px"
    }
    const spannedItem = {
        fontWeight: "bold",
        marginRight: "6px",
        marginLeft: "10px"
        
    }
    const add = {
        marginLeft: "50px",
        padding: "10px",
        fontWeight: "bold"
    }
  return (
    <div>
                <nav style={navStyle}>
            <a href="/todos">Todos</a>
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
            <h1>Grocery List</h1>
     <button style={add}><a href="/groceries/new">Add a Grocery item to the list</a></button>
     <ul>
     {props.groceries.map((product, i)=>{
        return(
            <div style={itemStyle}>
        <li style={listItem}><span style={spannedItem}>Item:</span> {product.product} {" "}<span style={spannedItem}> Brand:</span> {product.brand} {" "} <span style={spannedItem}>Quantity:</span> {" "}{product.quantity}
            <div style={buttons}>
        <button style={inputStyle}><a href={`/groceries/${product._id}/edit`}>Update</a></button>
        <form action={`/pantry/${product._id}`} METHOD="POST">
            <input style={inputStyle} type="submit" value="Purchase" />
        </form>
        <form action={`/groceries/${product._id}?_method=DELETE`} METHOD="POST">
            <input style={deleteStyle} type="submit" value="DELETE" />
        </form>
        </div>
        </li>
        </div>
        )
     })}
     </ul>
        
    </div>
  )
}

export default GroceriesPage