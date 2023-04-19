import React from 'react'

const NewGrocery = () => {
  return (
    <div>
                <nav>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
            <h2>Add a new Grocery item to your list</h2>
        <form action="/groceries" method="POST">
            <input type="text" placeholder="Add a Grocery" name="product" />
            <input type="text" placeholder="Specific Brand?" name="brand" />
            <input type="number" placeholder="Quantity" name="quantity" />
            <input type="submit" value="Add Grocery" />
        </form>   
    </div>
  )
}
module.exports = NewGrocery;
// export default NewGrocery