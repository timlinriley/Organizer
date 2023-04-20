import React from 'react'

const NewToDo = () => {
    
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
            <a href="/">Home</a>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <h2>Add a new todo to your list</h2>
        <form style={formStyle} action="/todos" method="POST">
            <input style={inputStyle} type="text" placeholder="Add a todo" name="item" />
            <input style={inputStyle} type="text" placeholder="Priority Level?" name="priority" />
            <input style={submitButton} type="submit" value="Add Todo" />
        </form>
    </div>
  )
}

module.exports = NewToDo;
// export default NewToDo