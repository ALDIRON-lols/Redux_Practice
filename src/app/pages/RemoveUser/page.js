"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/app/redux/slice";

const RemoveUser = () => {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <h1>RemoveUser</h1>
      {userData.map((user) => (
        <div key={user.id} className="userslist">
          <label>{user.name}</label>
          <button onClick={() => dispatch(removeUser(user.id))}>x</button>
        </div>
      ))}
    </div>
  );
};

export default RemoveUser;
