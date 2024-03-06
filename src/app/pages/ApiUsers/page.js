"use client";
import { fetchApiUsers } from "@/app/redux/slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ApiUsersPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.userData.userApiData);
  console.log(data);

  return (
    <div className="main">
      <h1>ApiUsersPage</h1>
      <button onClick={() => dispatch(fetchApiUsers())}>Fetch</button>
      <div className="displayusers">
        <h1>Display Users</h1>
        {data.map((user) => (
          <div key={user.id} className="userslist">
            <h4>Name: {user.name}</h4>
            <p>email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiUsersPage;
