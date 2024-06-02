import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import SocialButton from "../components/SocialButton";
import GoogleIcon from "../../public/icons/GoogleIcon";
import FacebookIcon from "../../public/icons/FacebookIcon";
import AppleIcon from "../../public/icons/AppleIcon";

import { useGoogleLoginFunction } from "../hooks/useGoogleLogin";
//import socialButton from "../components/socialButton"
function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [inputScore, setInputScore] = useState(0);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { loginUsingGoogle } = useGoogleLoginFunction();
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, firstname, lastname);
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Sign up to an account</h1>

      <div className="my-5">
        <SocialButton
          bgColor="bg-[#4285F4]"
          hoverColor="hover:bg-[#4285F4]/90"
          focusRingColor="focus:ring-[#4285F4]/50"
          icon={<GoogleIcon></GoogleIcon>}
          text="Sign in with Google"
          onClickFunction={() => loginUsingGoogle()}
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
          <label id="firstname">
            <p className="font-medium text-slate-700 pb-2">
              Enter your first name
            </p>
            <input
              id="firstname"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
          </label>

          <label id="lastname">
            <p className="font-medium text-slate-700 pb-2">
              Enter your last name
            </p>
            <input
              id="lastname"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </label>

          <label id="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label id="password">
            <p className="font-medium text-slate-700 pb-2">Choose a Password</p>
            <input
              id="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <PasswordStrengthBar
            password={password}
            minLength={4}
            onChangeScore={(score) => {
              setInputScore(score);
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
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium  text-slate-700 ">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </div>

          <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            Sign up
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
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
