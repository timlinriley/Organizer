import React from 'react'

const TodosPage = (props) => {
  return (
    <div>
     <h1>Todos</h1>   
     <ul>
     {props.todos.map((todo, i)=>{
        <li>{todo}</li>
     })}
     </ul>
    </div>
  )
}



export default TodosPage

