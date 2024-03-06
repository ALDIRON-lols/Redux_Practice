"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
    console.log(name);
  };
  return (
    <div className="addusers">
      <h1>Add Users</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="add-user-input"
      />
      <button onClick={userDispatch} className="add-user-button">
        Add user
      </button>
    </div>
  );
};

export default AddUsers;
