import React from 'react'

const NewGrocery = () => {
  return (
    <div>
            <h2>Add a new Grocery item to your list</h2>
        <form action="/groceries" method="POST">
            <input type="text" placeholder="Add a Grocery" name="product" />
            <input type="text" placeholder="Specific Brand?" name="brand" />
            <input type="number" placeholder="quantity" name="quantity" />
            <input type="submit" value="Add Grocery" />
        </form>   
    </div>
  )
}
module.exports = NewGrocery;
// export default NewGrocery