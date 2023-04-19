import React from 'react'

const EditToDos = (props) => {
  return (
    <div>
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