import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import SocialButton from "../components/SocialButton";
import GoogleIcon from "../../public/icons/GoogleIcon";
import FacebookIcon from "../../public/icons/FacebookIcon";
import AppleIcon from "../../public/icons/AppleIcon";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Login to your account</h1>

      <div className="my-5">
        <SocialButton
          bgColor="bg-[#4285F4]"
          hoverColor="hover:bg-[#4285F4]/90"
          focusRingColor="focus:ring-[#4285F4]/50"
          icon={<GoogleIcon></GoogleIcon>}
          text="Sign in with Google"
        />

        <SocialButton
          bgColor="bg-[#3b5998]"
          hoverColor="hover:bg-[#3b5998]/90"
          focusRingColor="focus:ring-[#3b5998]/50"
          icon={<FacebookIcon />}
          text="Sign in with Facebook"
        />
        <SocialButton
          bgColor="bg-[#050708]"
          hoverColor="hover:bg-[#050708]/90"
          focusRingColor="focus:ring-[#050708]/50"
          icon={<AppleIcon />}
          text="Sign in with Apple"

          
        />
      </div>
      <form onSubmit={handleSubmit} className="my-10">
        <div className="flex flex-col space-y-5">
          <label id="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label id="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div className="flex flex-row justify-between">
            <div className="flex items-center mb-4">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="mt-2 ml-2 font-medium text-slate-700 pb-2">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="font-medium text-indigo-600">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            Login
          </button>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <p className="text-center">
            Not registered yet?{" "}
            <a
              href="/signup"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span>Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
