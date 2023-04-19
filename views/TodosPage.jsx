import React from 'react'

const TodosPage = (props) => {
  return (
    <div>
                <nav>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
     <h1>Todos</h1>
     <button><a href="/todos/new">Add a Todo</a></button>
     <ul>
     {props.todos.map((todo, i)=>{
        return(
        <li>{todo.item} - Priority: {todo.priority}
        <button><a href={`/todos/${todo._id}/edit`}>Update</a></button>
        <form action={`/todos/${todo._id}?_method=DELETE`} METHOD="POST">
            <input type="submit" value="DELETE" />
        </form>
        </li>
        )
     })}
     </ul>
    </div>
  )
}



export default TodosPage

