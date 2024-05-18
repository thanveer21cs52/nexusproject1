import React from 'react';
import './App.css';
import Nav from './Nav.js';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },{
    path:"/signup",
    element:<Signup />
  },{
    path:"/login",
    element:<Login />
  }
])

function App() {
  return (
    <div className="App">
      <Nav />
      <div class="mid">
        <RouterProvider router={router} />
      </div>
      <div class="bottom">
        @Nexus
      </div>
    </div>
  );
}

export default App;
