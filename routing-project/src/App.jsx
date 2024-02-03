import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Hello from "./components/Hello";
    
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/:nmb" element={<Number></Number>}/>
      <Route path="/:hello/:clr/:background" element={<Hello></Hello>}/>
    </Routes>
    </BrowserRouter>
  );
}
    
export default App;


