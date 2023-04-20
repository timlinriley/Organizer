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
  return (
    <div>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
                    <h1>What we have</h1>
     <button><a href="/pantry/new">Purchased somehing? Add it to this list</a></button>
     <ul>
     {props.items.map((item, i)=>{
        return(
        <li>Item: {item.product} {" "} Brand: {item.brand} {" "} Quantity: {item.quantity} {" "} 
        <button><a href={`/pantry/${item._id}/edit`}>Update</a></button>
        <form action={`/pantry/${item._id}?_method=DELETE`} METHOD="POST">
            <input type="submit" value="DELETE" />
        </form>
        </li>
        )
     })}
     </ul>
    </div>
  )
}

export default PantryPage