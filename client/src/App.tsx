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
import Proceed from "./pages/Proceed";
import Checkout from "./pages/Checkout";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />

        <div className="flex flex-1">
          <SideNav  />
          <main className="flex-1">
            <Routes>
              <Route path="/movies" element={<Movies />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/movies" />} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/movies" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/proceed" element={<Proceed />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/newmovie" element={<NewMovie />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
