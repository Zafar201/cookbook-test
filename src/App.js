import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
       <div className="app-container">
        <Header/>
        <HomeScreen/>
      </div>
    </div>

  )
}

export default App;
