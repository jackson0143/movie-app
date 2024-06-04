import { useState } from "react";

function Proceed() {
  const [tickets, setTickets] = useState({
    adult: 0,
    child: 0,
    student: 0,
    concession: 0,
  });

  const addTicket = (type) => {
    setTickets((prevTickets) => ({
      ...prevTickets,
      [type]: prevTickets[type] + 1,
    }));
  };

  const subtractTicket = (type) => {
    setTickets((prevTickets) => ({
      ...prevTickets,
      [type]: prevTickets[type] > 0 ? prevTickets[type] - 1 : 0,
    }));
  };

  const ticketPrices = {
    adult: 12.99,
    child: 8.99,
    student: 10.99,
    concession: 9.99,
  };

  const getTotal = () => {
    return Object.keys(tickets)
      .reduce((total, type) => total + tickets[type] * ticketPrices[type], 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="grid grid-cols-3 my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="col-span-2 pr-8">
          <h1 className="text-4xl font-medium">Choose your tickets</h1>

          <div className="my-5">
            <p className="font-medium text-slate-700 pb-2">Email address</p>

            <div className="bg-gray-50 rounded-lg ">
              {[
                { name: `Adult Ticket`, type: "adult" },
                { name: "Child Ticket", type: "child" },
                { name: "Student Ticket", type: "student" },
                { name: "Concession Ticket", type: "concession" },
              ].map((ticket) => (
                <div
                  className={`flex border ${
                    ticket.type === "concession" ? "rounded-b-lg" : ""
                  } ${
                    ticket.type === "adult" ? "rounded-t-lg" : ""
                  } px-5 py-5 justify-between items-center`}
                  key={ticket.type}
                >
                  <div className="flex-1">{ticket.name}</div>
                  <div className="flex-1 flex justify-end pl-48">
                    ${ticketPrices[ticket.type]}
                  </div>
                  <div className="flex-1 flex justify-end">
                    {tickets[ticket.type] === 0 ? (
                      <button
                        className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm w-40"
                        onClick={() => addTicket(ticket.type)}
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex items-center justify-between w-40 ">
                        <button
                          className=""
                          onClick={() => subtractTicket(ticket.type)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="rgb(99 102 241)"
                            className="size-10"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <span>{tickets[ticket.type]}</span>
                        <button
                          className=""
                          onClick={() => addTicket(ticket.type)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="rgb(238 242 255)"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="rgb(99 102 241)"
                            className="size-10"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*THIS DIV IS FOR THE SUMMARY */}
        <div className="col-span-1">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Ticket Summary</p>
            <p className="text-gray-400">Check your tickets</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {parseFloat(getTotal())<=0 ?"Your ticket cart is empty":(
              Object.keys(tickets)
                .filter((type) => tickets[type] > 0)
                .map((type) => (
                  <div
                    className=" rounded-lg bg-white sm:flex-row"
                    key={type}
                  >
                    <div className="flex justify-between items-center">
                  
                      <div className =" " >
                       
                      {tickets[type]} x{" "}
                    <span className = "text-lg font-semibold text-gray-900">
                        {type.charAt(0).toUpperCase() + type.slice(1)} Ticket
                        </span>
                      </div>

                      <div>${ticketPrices[type] * tickets[type]}</div>
                    </div>
                  </div>
                ))
              )
              }
            </div>
            <div className="flex justify-between">
              <p className="mt-8 text-lg font-medium ">Total</p>
              <div className="mt-8 text-lg font-small pr-4">${getTotal()}</div>
            </div>
            <div className="flex justify-center pt-4">
              <a
                className="bg-indigo-600 w-5/6 px-4 py-2 rounded text-center text-white hover:bg-indigo-500 text-sm"
                
                href="/checkout"
              >
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
