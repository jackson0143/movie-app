import React from "react";

function Proceed() {
  return (
    <>
      <div className="grid grid-cols-3 my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="col-span-2 pr-8">
          <h1 className="text-4xl font-medium">Choose your tickets</h1>

          <div className="my-5">

              <p className="font-medium text-slate-700 pb-2">Email address</p>

              <div className="bg-gray-50 rounded-lg">
                <div className="flex border rounded-t-lg px-5 py-5 inline justify-between">
                  <div>Adult Ticket</div>
                  <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                    ADD
                  </button>
                </div>
                <div className="flex border px-5 py-5 justify-between">
                  <div>Child ticket</div>
                  <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                    ADD
                  </button>
                </div>
                <div className="flex border px-5 py-5 justify-between">
                  <div>Student ticket</div>{" "}
                  <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                    ADD
                  </button>
                </div>
                <div className="flex border rounded-b-lg px-5 py-5 justify-between">
                  <div>Concession ticket</div>{" "}
                  <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                    ADD
                  </button>
                </div>
              </div>
          
          </div>
        </div>
        {/*THIS DIV IS FOR THE SUMMARY */}
        <div className="col-span-1">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Ticket Summary</p>
            <p className="text-gray-400">Check your tickets</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                1 x Adult Ticket
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                1 x Children Ticket
              </div>
            </div>
            <div className="flex justify-between">
              <p className="mt-8 text-lg font-medium">Total</p>
              <div className="mt-8 text-lg font-small">$12.99</div>
            </div>
            <div className = "flex justify-center pt-4">
              <a className="bg-indigo-600 w-5/6 px-4 py-2 rounded text-center text-white hover:bg-indigo-500 text-sm" href="/checkout">
                PROCEED TO PAYMENT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proceed;
