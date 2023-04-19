import React from 'react'

const Home = () => {
  return (
    <div>
        <nav>
            <a href="/todos">Todos</a> <br/>
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <h1>Welcome to the personal organizer app!</h1>
    </div>
  )
}

export default Home