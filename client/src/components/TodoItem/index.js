import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const TodoItem = (props) => {
  const { todoitem, fetchTodos } = props;
  const { todo, _id } = todoitem;
  const [isChecked, setCheckInput] = useState(false);
  const [editTodo, setEditedTodo] = useState(false);
  const [updateInput, setUpdateInput] = useState("");
  console.log(isChecked);

  const handleUpdate = async () => {
    const url = `http://localhost:5000/updateTodo/${_id}`;
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ todo: updateInput }),
    };
    if (updateInput.trim() !== "") {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          console.log("todo updated");
          fetchTodos();
          setUpdateInput("");
          setEditedTodo(false);
        }
      } catch (error) {
        console.log(`error updating todo: ${error}`);
      }
    }
    alert("plese enter valid input");
  };

  const handleDelete = async () => {
    const url = `http://localhost:5000/deleteTodo/${_id}`;
    const options = {
      method: "DELETE",
    };
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        console.log("todo deleted");
        fetchTodos();
      }
    } catch (error) {
      console.log(`error deleting todo: ${error}`);
    }
  };

  return (
    <li className="todo-item">
      <input type="checkbox" onClick={() => setCheckInput(!isChecked)} />
      <div className="todo">
        {editTodo ? (
          <div>
            <input
              type="text"
              onChange={(e) => setUpdateInput(e.target.value)}
              value={updateInput}
            />
            <button className="edit-btns" onClick={handleUpdate}>
              Save
            </button>
            <button className="edit-btns" onClick={() => setEditedTodo(false)}>
              Close
            </button>
          </div>
        ) : (
          <p className={isChecked ? "checked" : ""}>{todo}</p>
        )}
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={`todo-icons ${editTodo ? "hide-icon" : ""}`}
            onClick={() => setEditedTodo(true)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className={`todo-icons ${editTodo ? "hide-icon" : ""}`}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
