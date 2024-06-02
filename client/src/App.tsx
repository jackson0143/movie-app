import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import NewMovie from "./pages/NewMovie";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import MovieDetails from "./pages/MovieDetails";
import SideNav from "./components/SideNav";
import Profile from "./pages/Profile";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <SideNav/>
         
          {/*Perhaps create a grid and reserve left and right side for sidenav, remaining with middle space */}
      
            
           
        

            <div className=" w-full  ">  
            <Routes>
            <Route path="/movies" element={<Movies />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/movies" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/movies" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/newmovie" element={<NewMovie />} />
              
            </Routes>
          </div>
         
          
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
