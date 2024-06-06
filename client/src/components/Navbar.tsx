import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ProfileMenu } from "./ProfileMenu";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    
    <nav>
   

      <div className="">
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <a href="/" className="text-xl lg:text-2xl font-bold cursor-pointer">
            Jackson's movie app
          </a>
          
          <div className="flex justify-center flex-grow px-4">
            <div className="relative w-full max-w-2xl">
              <input
                className="appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 pl-10 pr-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                type="text"
                placeholder="Search movies and more..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                  <ProfileMenu></ProfileMenu>
              



              
                <a
                  onClick={logout}
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm cursor-pointer"
                  href = "/"
                >
                  LOG OUT
                </a>
              </>
            )}

            {!user && (
              <>
                <a href="/login" className="text-gray-800 text-sm">
                  LOGIN
                </a>
                <a
                  href="/signup"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  SIGNUP
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
