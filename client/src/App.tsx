import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>
      
          <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/signup" element = {<Signup/>}></Route>
            <Route path = "/movies" element = {<Movies/>}></Route>
          </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;
