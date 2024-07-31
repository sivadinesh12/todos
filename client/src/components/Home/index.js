/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import TodoItem from "../TodoItem";
import "reactjs-popup/dist/index.css";
import "./index.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/getTodo");
      if (response.ok) {
        console.log("todo fetched ");
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.log(`Error fetching todos: ${error}`);
    }
  };

  const handleSubmit = async () => {
    if (inputValue.trim() === "") {
      alert("please enter valid")
    } else {
      console.log("Input Value:", inputValue);
      setInputError(false);
      const url = "http://localhost:5000/newTodo";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ todo: inputValue }),
      };
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          console.log("todo added");
          setInputValue("");
          fetchTodos();
        }
      } catch (error) {
        console.log(`error adding todo ${error}`);
      }
    }
  };

  return (
    <div className="bg-container">
      <nav>
        <h1>To~Do</h1>
        <div className="mobile-popup-container">
          <Popup
            trigger={<FontAwesomeIcon icon={faPlus} className="icon" />}
            modal
            position="bottom left"
            className="add-popup"
          >
            {(close) => (
              <div className="popup-content">
                <h2>Add New Todo</h2>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (e.target.value.trim() !== "") {
                      setInputError(false);
                    }
                  }}
                  placeholder="Enter new todo"
                  className="popup-input"
                />
                {inputError && (
                  <p className="err">Please enter a valid input</p>
                )}
                <button
                  onClick={() => {
                    handleSubmit();
                    if (!inputError) {
                      close();
                    }
                  }}
                  className="popup-button"
                >
                  Add
                </button>
                <button className="popup-button" onClick={close}>
                  Close
                </button>
              </div>
            )}
          </Popup>
        </div>
        <div className="add-input-container">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button className="add-btn" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </nav>
      <ul className="todoList">
        {todos.map((each) => (
          <TodoItem todoitem={each} key={each._id} fetchTodos={fetchTodos} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
