import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav>
      <div className="">
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-xl lg:text-2xl font-bold cursor-pointer"
            >
              Jackson's movie app
            </a>
            <div className="hidden md:flex justify-around space-x-4">
              <a href="/movies" className="hover:text-indigo-600 text-gray-700">
                Movies
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Session times
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Cinemas
              </a>
              <a href="#" className="hover:text-indigo-600 text-gray-700">
                Rewards
              </a>
            </div>
          </div>

        
            {user && (
              <div className = "flex space-x-4 items-center">
                <span> {user.email} </span>
                <a
                  onClick={logout}
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  LOG OUT
                </a>
              </div>
            )}


            {!user && (<div className = "flex space-x-4 items-center">
            <a href="/login" className="text-gray-800 text-sm">
              LOGIN
            </a>
            <a
              href="/signup"
              className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
            >
              SIGNUP
            </a>

            </div>)}
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
