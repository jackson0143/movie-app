import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
function Signup() {
  const [inputValue, setInputValue] = useState("");
  const [inputScore, setInputScore] = useState(0);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Sign up to an account</h1>

      <div className="my-5">
        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <span>Sign up with Google</span>
        </button>
      </div>
      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label id="name">
            <p className="font-medium text-slate-700 pb-2">Enter your name</p>
            <input
              id="name"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Full name"
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
              <span>Sign in now </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
