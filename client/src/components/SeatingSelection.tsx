import { useState } from "react";

function SeatingSelection({ sessionTime }) {
  const dictionary = {
    available: "rgb(55 65 81)",
    reserved: "yellow",
    unavailable: "rgb(229 231 235)",
  };

  const [selectedSeat, setSeat] = useState({});


  return (
    <div className="bg-gray-200 p-4 py-10 rounded-md mr-4">
      {sessionTime.rowSeats.map((row) => (
        <div className="flex items-center  ">
          {row.row}

          {row.seats.map((seat) => (
            <button
              type="button"
              className={` inline-flex items-center ${
                seat.status === "unavailable" ? "cursor-default" : ""
              }`}
              onClick={
                seat.status !== "unavailable"
                  ? () => setSeat({ row: row.row, seat: seat.number })
                  : null
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  selectedSeat["seat"] == seat.number &&
                  selectedSeat["row"] == row.row &&
                  seat.status != "unavailable"
                    ? "red"
                    : dictionary[seat.status]
                }
                viewBox="0 0 24 24"
                className="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                />
              </svg>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SeatingSelection;
