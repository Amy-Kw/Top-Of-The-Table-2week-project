import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createLogin } from "../API/users";// got questions, its red

const baseUrl = 'http://localhost:8080';


export default function createLogin({}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

async function loginUser(event) {
    event.preventDefault();
    try {
        const response = await fetch(`${baseUrl}/api/users`);
        // const response = await login(username, password);
        console.log("log in success", response);
        navigate("/users");
    } catch(err) {
        console.error("Did not work!", err);
    }
}


  return (
    <div className="login">
      <h1>Log into your account</h1>
      <form className="loginForm" onSubmit={loginUser}>
        <label>
          <b>Username: </b>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label>
          <b>Password: </b>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <button className="loginButton" type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
}
