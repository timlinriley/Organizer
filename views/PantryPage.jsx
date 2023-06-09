import React from 'react'

const PantryPage = (props) => {

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
            <a href="/">Home</a>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
                    <h1>What we have at home:</h1>
     <button style={add}><a href="/pantry/new">Purchased somehing? Add it to this list</a></button>
     <ul>
     {props.items.map((item, i)=>{
        return(
            <div style={itemStyle}>
        <li style={listItem}> <span style={spannedItem}>Item:</span> {item.product} {" "}<span style={spannedItem}> Brand:</span> {item.brand} {" "} <span style={spannedItem}>Quantity:</span> {item.quantity} {" "} 
        <button style={inputStyle}><a href={`/pantry/${item._id}/edit`}>Update</a></button>
        <form action={`/pantry/${item._id}?_method=DELETE`} METHOD="POST">
            <input style={deleteStyle}type="submit" value="DELETE" />
        </form>
        </li>
        </div>
        )
     })}
     </ul>
    </div>
  )
}

export default PantryPage