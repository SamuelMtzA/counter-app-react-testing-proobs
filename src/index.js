import React from "react";
import ReactDOM from "react-dom";
// import FirstApp from "./firstApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<FirstApp saludo='hola soy samuel' />, divRoot);

ReactDOM.render(<CounterApp value = {10} />, divRoot);
