import React, { useState } from 'react';

function Checkout() {


  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardSecurity, setCardSecurity] = useState('')
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); 
    setCardNumber(formattedValue);
  };



  const handleCardExpiryChange = (e) => {
    const value = e.target.value.replace(/[^\d/]/g, ''); 
    let formattedValue = value;
    if (formattedValue.length > 2 && !formattedValue.includes('/')) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
    }

    const parts = formattedValue.split('/');
    if (parts.length > 2) {
      formattedValue = `${parts[0]}/${parts[1]}`;
    }

    setCardExpiry(formattedValue);
  };

  const handleCardSecurityChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardSecurity(value);
  };


  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div>
          <h1 className="text-4xl font-medium">Checkout</h1>

          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>
          <h1 className="text-xl font-medium pt-2">Choose payment method</h1>

          <label htmlFor="name">
            <p className="font-medium text-slate-700 pb-2 mt-4">Name of card</p>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Name as shown on card"
            />
          </label>

          <label htmlFor="card-no">
            <p className="font-medium text-slate-700 pb-2 mt-2">Card number</p>
            <div className="relative">
              <input
                id="card-no"
                name="card-no"
                type = "text"
                inputMode="numeric"
                maxLength={19}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 pl-11 focus:outline-none focus:border-slate-500 hover:shadow"
                autoComplete="cc-number"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
          </label>

          <div className="flex justify-between">
            <label htmlFor="expiration-date">
              <p className="font-medium text-slate-700 pb-2 mt-2">Expiration Date</p>
              <input
                id="expiration-date"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="MM/YY"
                maxLength={5}
                value={cardExpiry}
                onChange={handleCardExpiryChange}
              />
            </label>
            <label htmlFor="cvv">
              <p className="font-medium text-slate-700 pb-2 mt-2">Security code</p>
              <input
                id="cvv"

                maxLength={3}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="CVV"
                value={cardSecurity}
                onChange={handleCardSecurityChange}
              />
            </label>
          </div>

          <div className="pt-5 flex justify-center">
            <a
              className="bg-indigo-600 w-5/6 px-4 py-2 rounded text-center text-white hover:bg-indigo-500 text-sm"
              href="/movies"
            >
              PAY NOW
            </a>
          </div>
        </div>
        {/* THIS DIV IS FOR THE SUMMARY */}
      </div>
    </>
  );
}

export default Checkout;
