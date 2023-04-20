# Organizer

This is a full stack MERN app that moves to do lists and grocery lists from physical to one digital app. Additionally, there is a tool to track what items are currently in your kitchen and when they expire.

# Tools:

1. To do list: create, edit and delete todo list items.
2. Grocery list: create, edit, and delete grocery list items.
3. Pantry list: create, edit, and delete items in your pantry

# Tech:
- Express
- Node
- Mongoose / MongoDB
- React

# Approach:
The idea for the app came when my wife suggested be buy a magnetic marker board for our fridge to write grocery lists and keep track of what we have and when it is expiring. This project is a first stab at adressing kitchen and home organization issues that all families face. I created mongoose Schemas for todos, grocery, and pantry list items. Then I went through and created CRUD routes and views for each schema.  

# Further iteration:
Facing a deadline for class, there is much functionality missing that I will be adding:
- User login/auth plus collaboration between users who link their accounts
- Estimated expirations on pantry items will alert user to use/throw out
- Home page displays local weather and news
- To do list items move to seperate completed list when marked as completed
- When grocery list item is marked as purchased it becomes a pantry item
