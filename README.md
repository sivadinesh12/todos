# To-Do List Application
## Overview
This is a simple To-Do List application built with React on the frontend and Express with MongoDB on the backend. It allows users to add, update, and delete to-do items, as well as manage their tasks with a popup interface and list view.

## Features
- Add new to-do items.
- Update existing to-do items.
- Delete to-do items.
- Mark to-dos as completed.
- Responsive design with a mobile-friendly popup interface.

## Technologies Used

- Frontend:

  - React
  - ReactJS Popup
  - Font Awesome
  - CSS
    
- Backend:

  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - CORS

# Getting Started
## Prerequisites
 - Node.js
 - npm or yarn
 - MongoDB

## Installation
#### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```
#### 2. Set up the backend:

- Navigate to the backend directory:

    ```bash
    cd backend
    ```
- Install the required packages:

    ```bash
    npm install
    ```
- Start the backend server:

    ```bash
    npm start
    ```
The backend server will run on http://localhost:5000.

#### 3. Set up the frontend:

- Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```
    
- Install the required packages:

    ```bash
    npm install
    ```
    
- Start the frontend development server:

    ```bash
    npm start
    ```
The frontend application will run on http://localhost:3000.

#### 4. Configure MongoDB:

Ensure MongoDB is running locally on the default port (27017). The backend will connect to mongodb://localhost:27017/todoDB.

## Usage
#### 1. Access the Application:

Open your web browser and go to http://localhost:3000 to access the To-Do List application.

#### 2. Add a New To-Do:

- Click the "+" icon to open the popup and enter your new to-do item.
- Click "Add" to save it to the list.

#### 3. Update or Delete a To-Do:

- Click the pencil icon to edit an existing to-do.
- Click the trash icon to delete a to-do.

#### 4. Mark To-Do as Completed:

Click the checkbox next to a to-do to mark it as completed.

## API Endpoints
- POST /newTodo - Add a new to-do.
- GET /getTodo - Get all to-dos.
- PUT /updateTodo/:id - Update a to-do by ID.
- DELETE /deleteTodo/:id - Delete a to-do by ID.

## Contributing
Feel free to fork the repository and submit pull requests. Please ensure that your changes are well-documented and tested.

## Acknowledgments
- React and its ecosystem for building the frontend.
- Express and MongoDB for backend development.
- Font Awesome for icons.
- ReactJS Popup for the popup interface.
