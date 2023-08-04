import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FunctionalComp from "./Components/FunctonalComponents";
import ClassComp from "./Components/ClassComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="d-flex flex-column bg-dark text-light p-3">
      <h1 className="text-danger bg-light p-3">I am a web developer.   My name is Tobiloba</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
    </div>
  );
}

export default App;
