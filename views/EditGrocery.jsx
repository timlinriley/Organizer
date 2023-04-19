import React from 'react'

const EditGrocery = (props) => {
  return (
    <div>
        <form action={`/groceries/${props.grocery._id}?_method=PUT`} method="POST">
        <input type="text" placeholder="Edit Item" name="product" />
        <input type="text" placeholder="Edit Brand" name="brand" />
       <input type="number" placeholder="Quantity" name="quantity" />
        <input type="submit" value="Update Grocery Item" />      
        </form> 

    </div>
  )
}

export default EditToDos