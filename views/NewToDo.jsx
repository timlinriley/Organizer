import React from 'react'

const NewToDo = () => {
  return (
    <div>
        <h2>Add a new todo to your list</h2>
        <form action="/todos" method="POST">
            <input type="text" placeholder="Add a todo" name="item" />
            <input type="text" placeholder="Priority Level?" name="priority" />
            <input type="submit" value="Add Todo" />
        </form>
    </div>
  )
}

module.exports = NewToDo;
// export default NewToDo