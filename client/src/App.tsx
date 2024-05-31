import { BrowserRouter, Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import NewMovie from "./pages/NewMovie";

function App() {

  const {user} = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/login" element={!user ? <Login />: <Navigate to="/" />}></Route>
          <Route path="/signup" element={!user ? <Signup />:<Navigate to="/" /> }></Route>
          <Route path="/movies" element={<Movies />}></Route>

          <Route path="/newmovie" element={<NewMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
