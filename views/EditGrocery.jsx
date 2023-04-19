import React from 'react'

const EditGrocery = (props) => {
  return (
    <div>
                <nav>
            <a href="/todos">Todos</a> <br/>
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <form action={`/groceries/${props.grocery._id}?_method=PUT`} method="POST">
        <input type="text" placeholder="Edit Item" name="product" />
        <input type="text" placeholder="Edit Brand" name="brand" />
       <input type="number" placeholder="Quantity" name="quantity" />
        <input type="submit" value="Update Grocery Item" />      
        </form> 

    </div>
  )
}

export default EditGrocery