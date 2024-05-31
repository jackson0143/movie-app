import React, { useState } from "react";

type OpenAccordions = {
  [key: number]: boolean;
};

function Faq() {
  const [openAccordions, setOpenAccordions] = useState<OpenAccordions>({});

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqItems = [
    {
      question: "How can I reset my password?",
      answer:
        'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password.',
    },

    {
      question: "How can I contact you?",
      answer: 'To contact us, simply go to "Contact Us" and submit a form.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`accordion border border-solid border-gray-300  bg-white p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openAccordions[index]}`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                onClick={() => toggleAccordion(index)}
              >
                <h5>{item.question}</h5>

                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    openAccordions[index] ? "hidden" : "block"
                  } group-hover:text-indigo-600 origin-center`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${
                    openAccordions[index] ? "block" : "hidden"
                  } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`accordion-content w-full overflow-hidden transition duration-500 ${
                  openAccordions[index] ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
