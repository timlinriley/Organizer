import React from 'react'

const NewToDo = () => {
  return (
    <div>
                <nav>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
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