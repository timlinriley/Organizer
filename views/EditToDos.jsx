import React from 'react'

const EditToDos = (props) => {
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
        padding: "10px"
        
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

            <a href="/">Home</a>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <h1>Edit Todo:</h1>
        <form style={formStyle} action={`/todos/${props.todo._id}?_method=PUT`} method="POST">
        <input style={inputStyle} type="text" placeholder={props.todo.item} name="item" />
        <input style={inputStyle}type="text" placeholder={props.todo.priority} name="priority" />
        Completed: <input type="checkbox" name="completed" />
        <input style={submitButton} type="submit" value="Update Todo" />      
        </form> 

    </div>
  )
}

export default EditToDos