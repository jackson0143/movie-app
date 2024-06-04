import { useState, useEffect } from "react";


import { useParams } from "react-router-dom";
import SeatingSelection from "./SeatingSelection";
function SessionTimes() {


  const [sessionTime, setSessionTime] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    const fetchSessionTime = async () => {
      const response = await fetch(`api/sessiontimes/${id}`);
      const json = await response.json();

      if (response.ok) {
        setSessionTime(json);
      }
    };
    fetchSessionTime();
  }, [id]);








if(sessionTime){
  console.log(sessionTime)
}

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="w-full flex space-x-4 pt-4 pb-6">{buttons}</div>

      <div className="grid gap-4 grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3">
        <button
          className={
            " items-center bg-transparent hover:bg-indigo-50 text-blue-700 font-semibold hover:text-blue-700 py-2  border border-indigo-500 hover:border-indigo-500 rounded"
          }
          onClick={toggleDrawer}
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
          onClick={toggleDrawer}
        >
          <div className="">
            <div>12:00PM</div>
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
          onClick={toggleDrawer}
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
          onClick={toggleDrawer}
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
          onClick={toggleDrawer}
        >
          <div className="">
            <div>9:00PM</div>

            <span>Standard</span>
          </div>
        </button>

        <div>

          {/* If the drawer is open, we can display */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={toggleDrawer}
            ></div>
          )}

          <div
            className={`fixed top-0 right-0 z-40 h-screen p-6  transition-transform transform bg-gray-50 w-150 ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-labelledby="drawer-right-label"
          >
            <h5
              id="drawer-right-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              Choose your seats
            </h5>
            <button
              type="button"
              onClick={toggleDrawer}
        
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"

                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 w-[800px]">














              {/*DISPLAY MESSAGE HERE */}
              {sessionTime&& <SeatingSelection sessionTime={sessionTime}></SeatingSelection>}



            </p>
           
            <a className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            href="/proceed"
            >
            PROCEED
          </a>        
          </div>
        </div>
      </div>
    </>
  );
}

export default SessionTimes;
