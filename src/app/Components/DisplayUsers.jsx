"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUsers = () => {
  const userData = useSelector((data) => data.userData.users);
  console.log(userData);
  const dispatch = useDispatch();

  return (
    <div className="displayusers">
      <h1>Display Users</h1>
      {userData.map((user) => (
        <div key={user.id} className="userslist">
          <label>{user.name}</label>
          <button onClick={() => dispatch(removeUser(user.id))}>x</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
