import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useAuthContext } from "../hooks/useAuthContext";
function ContactUs() {
  const { user } = useAuthContext();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");


  const publicKeyID = import.meta.env.VITE_PUBLIC_KEY
  const serviceID = import.meta.env.VITE_SERVICE_KEY
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    emailjs
      .sendForm(serviceID, 'template_rnsd60l', form.current, {
        publicKey: publicKeyID,
      })
      .then(
        () => {
          console.log('Email has been sent!');
        },
        (error) => {
          console.log('Failed to send email!', error.text);
        },
      );
    setIsSubmitted(true);
    setError(""); // Clear the error
   

  };


  
  
  return (
    <section className="body-font relative py-24">
      <div className="container mx-auto px-5">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-3xl font-semibold text-gray-900">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed text-gray-700">
            Feel free to reach out to us! Whether you have a question, or need help with a ticket purchase, please submit a form. Thank you!
          </p>
        </div>

        <div className="mx-auto md:w-2/3 ">
          {isSubmitted ? (
            <div className="mb-4 text-center text-lg text-green-600">
              Your form has been submitted. Thank you!
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit}>
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="peer w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Name"
                    />
                    <label className="absolute left-3 -top-6 bg-white text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                      Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Email"
                    />
                    <label className="absolute left-3 -top-6 bg-white text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                      Email
                    </label>
                    
                  </div>
                </div>
                <div className="mt-4 w-full p-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={ message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="peer h-32 w-full resize-none rounded border border-gray-300 bg-white py-2 px-3 text-base leading-6 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Message"
                    ></textarea>
                    <label className="absolute left-3 -top-6 bg-white text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
                      Message
                    </label>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="mx-auto flex rounded bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-900"
                  >
                    Submit
                  </button>
                  {error && (
                    <div
                      className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <strong className="font-bold">Error! </strong>
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
