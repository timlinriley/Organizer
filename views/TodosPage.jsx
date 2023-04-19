import React from 'react'

const TodosPage = (props) => {
  return (
    <div>
     <h1>Todos</h1>
     <button><a href="/todos/new">Add a Todo</a></button>
     <ul>
     {props.todos.map((todo, i)=>{
        return(
        <li>{todo.item} - Priority: {todo.priority}</li>
        )
     })}
     </ul>
    </div>
  )
}



export default TodosPage

