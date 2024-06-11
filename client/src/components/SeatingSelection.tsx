import { useState } from "react";
import "./styles.css";

function SeatingSelection({ sessionTime }) {
  const dictionary = {
    available: "rgb(55 65 81)",
    reserved: "yellow",
    unavailable: "rgb(229 231 235)",
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (row, seatNumber) => {
    const seatIndex = selectedSeats.findIndex(
      (seat) => seat.row === row && seat.seat === seatNumber
    );

    if (seatIndex > -1) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (seat, index) => index !== seatIndex
        )
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        { row, seat: seatNumber },
      ]);
    }
  };

  return (
    <div className="bg-gray-200 p-4 py-10 rounded-md mr-4 items-center">
      {sessionTime.rowSeats.map((row) => (
        <div className="flex justify-between items-center px-2" key={row.row}>
          <span className = "text-lg">{row.row}</span>
          {row.seats.map((seat) => (
            <button
              key={seat.number}
              type="button"
              className={`${
                seat.status === "unavailable" ? "cursor-default" : ""
              }`}

              onClick={
                seat.status !== "unavailable"
                  ? () => toggleSeatSelection(row.row, seat.number)
                  : null
              }
            >
              <svg
                viewBox="0 0 32 32"
                fill={
                  selectedSeats.some(
                    (selectedSeat) =>
                      selectedSeat.seat === seat.number &&
                      selectedSeat.row === row.row
                  ) && seat.status !== "unavailable"
                    ? "#cd242c"
                    : dictionary[seat.status]
                }
                className={`size-8 transition-all duration-400 seating-icon opacity-90 ${
                  seat.status !== "unavailable" ? "hover:fill-[#cd242c]" : ""
                }`}
              >
                <path
                  className="st0"
                  d="M9,29H5c-1.1,0-2-0.9-2-2V17c0-1.7,1.3-3,3-3h0c1.7,0,3,1.3,3,3V29z"
                />
                <path
                  className="st0"
                  d="M27,29h-4V17c0-1.7,1.3-3,3-3h0c1.7,0,3,1.3,3,3v10C29,28.1,28.1,29,27,29z"
                />
                <rect x="9" y="19" className="st0" width="14" height="10" />
                <path
                  className="st0"
                  d="M6,14V7.8C6,5.7,7.7,4,9.8,4h12.3C24.3,4,26,5.7,26,7.8V14"
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
