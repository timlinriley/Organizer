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

  return (
    <div>
                <nav style={navStyle}>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <form action={`/todos/${props.todo._id}?_method=PUT`} method="POST">
        <input type="text" placeholder="Add a todo" name="item" />
        <input type="text" placeholder="Priority Level?" name="priority" />
        Completed: <input type="checkbox" name="completed" />
        <input type="submit" value="Update Todo" />      
        </form> 

    </div>
  )
}

export default EditToDos