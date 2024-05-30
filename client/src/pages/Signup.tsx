import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
function Signup() {
  const [inputValue, setInputValue] = useState("");
  const [inputScore, setInputScore] = useState(0);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Sign up to an account</h1>

      <div className="my-5">
        <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-full py-3 border flex space-x-2 justify-center rounded-lg ">
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign up with Google
        </button>

        <button className="w-full py-3 border flex space-x-2 justify-center rounded-lg text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign up with Facebook
        </button>

        <button className="w-full py-3 border flex space-x-2 justify-center rounded-lg text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-center inline-flex items-center dark:hover:bg-[#050708]/30 me-2 mb-2">
          <svg
            className="w-5 h-5 me-2 -ms-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          Sign up with Apple 
        </button>
      </div>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label id="firstname">
            <p className="font-medium text-slate-700 pb-2">Enter your first name</p>
            <input
              id="firstname"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="First name"
            />
          </label>

          <label id="lastname">
            <p className="font-medium text-slate-700 pb-2">Enter your last name</p>
            <input
              id="lastname"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Last name"
            />
          </label>



          <label id="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Email Address"
            />
          </label>

          <label id="password">
            <p className="font-medium text-slate-700 pb-2">Choose a Password</p>
            <input
              id="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Password"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>

          <PasswordStrengthBar
            password={inputValue}
            minLength={4}
            onChangeScore={(score) => {
              setInputScore(score);
              console.log(inputScore)
            }}
          />
          <label id="password-2">
            <p className="font-medium text-slate-700 pb-2">
              Re-enter your password
            </p>
            <input
              id="password-2"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Confirm password"
            />
          </label>
          
          <div className="flex flex-row justify-between">
          <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ms-2 text-sm font-medium  text-slate-700 ">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>

          </div>


          <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            <span>Sign up</span>
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span>Log in </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
