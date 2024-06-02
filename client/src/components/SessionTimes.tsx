import { useState } from "react";
function SessionTimes() {
  //set date, and add 2, since we display today and tomorrow already
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 2);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = [];

  const handleClick = (id) => {
    setSelected(id);
  };

  const today = (
    <button
      className={
        selectedIndex === 0
          ? "bg-indigo-500 text-white font-semibold py-2 px-4 border border-indigo-500 rounded"
          : "bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2 px-4 border border-indigo-500 hover:border-indigo-500 rounded"
      }
      onClick={() => setSelectedIndex(0)}
    >
      TODAY
    </button>
  );

  const tomorrow = (
    <button
      className={
        selectedIndex === 1
          ? "bg-indigo-500 text-white font-semibold py-2 px-4 border border-indigo-500 rounded"
          : "bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2 px-4 border border-indigo-500 hover:border-indigo-500 rounded"
      }
      onClick={() => setSelectedIndex(1)}
    >
      TOMORROW
    </button>
  );

  buttons.push(today, tomorrow);
  for (let i = 2; i < 7; i++) {
    //Get day, month, and date
    const day = dayNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();

    //update the currentDate's date
    currentDate.setDate(currentDate.getDate() + 1);

    const buttonCreate = (
      <button
        className={
          selectedIndex === i
            ? "bg-indigo-500 text-white font-semibold py-2 px-4 border border-indigo-500 rounded"
            : "bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2 px-4 border border-indigo-500 hover:border-indigo-500 rounded"
        }
        onClick={() => setSelectedIndex(i)}
      >
        {`${day} ${date} ${month}`}
      </button>
    );

    buttons.push(buttonCreate);
  }
  return (
    <>
      <div className="w-full flex space-x-4 pt-4 pb-6">{buttons}</div>

      <div className="grid gap-4 grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3">
        <button
          className={
            " items-center bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2  border border-indigo-500 hover:border-indigo-500 rounded"
          }
        >
          <div className="">
            <div>10:00AM</div>

            <span>Standard</span>
          </div>
          <span className="text-[11px] letter-spacing-[20px] pt-2 text-gray-500 text-center block">
            AD CC
          </span>
        </button>

        <button
          className={
            " items-center bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2   border border-indigo-500 hover:border-indigo-500 rounded"
          }
        >
          <div className="">
            <div >12:00PM</div>
            <span>Super Screen</span>
          </div>
          <span className="text-[11px] letter-spacing-[20px] pt-2 text-gray-500 text-center block">
            AD CC
          </span>
        </button>

        <button
          className={
            " items-center bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2  border border-indigo-500 hover:border-indigo-500 rounded"
          }
        >
          <div className="">
            <div>2:00PM</div>

            <span>Standard</span>
            <span className="text-[11px] letter-spacing-[20px] pt-2 text-gray-500 text-center block">
            AD 
          </span>
          </div>
        </button>
        <button
          className={
            " bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2  border border-indigo-500 hover:border-indigo-500 rounded"
          }
        >
          <div className="">
            <div>6:00PM</div>

            <span>Standard</span>
          </div>
        </button>
        <button
          className={
            "bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700  border border-indigo-500 hover:border-indigo-500 rounded"
          }
        >
          <div className="">
            <div>9:00PM</div>

            <span>Standard</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default SessionTimes;
