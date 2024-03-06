"use client";
import { addTodos, removeTodo } from "@/app/redux/todoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoListPage = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((data) => data.todosData.todos);

  return (
    <div className="main">
      <h1>Add Todos</h1>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter todo"
        className="add-user-input"
      />
      <button
        onClick={() => dispatch(addTodos(task))}
        className="add-user-button"
      >
        Add Todo
      </button>
      <div className="displayusers">
        <h1>Display Todo</h1>
        {todoData.map((todo) => (
          <div key={todo.id} className="userslist">
            <label>{todo.description}</label>
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
