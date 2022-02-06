// initialize react required files
import React from "react";
import ReactDom from "react-dom";
import Navbar from "./comp/Navbar.component"
import "bootstrap/dist/css/bootstrap.min.css";

// Create first component function / class or whatever

function Tennis() {
  return (
    <main>
      <Navbar />
      <ul>
        <li>Create nav component</li>
        <li>Players, Games</li>
        <li>CRUD Players: Name, etc, too early to integrate sso?</li>
        <li>CRUD Games: Tennis games</li>
      </ul>
    </main>
  );
}

ReactDom.render(<Tennis />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
