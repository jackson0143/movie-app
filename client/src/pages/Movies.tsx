import { useState, useEffect } from "react";


function Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5050/api/movies");
      const json = await response.json();

      if (response.ok) {
        setMovies(json);
      }
    };

    fetchData();
  }, []);

  return (
    <>

    {movies && movies.map((movie) =>
    (
      <div className="flex justify-center pt-5">
      <div className="flex flex-row  max-w-5xl p-12 bg-white border border-gray-200 rounded-lg shadow-lg">
        <img
          className="w-auto h-auto rounded-lg pr-2"
          src={`../../public/${movie._id}.jpg`}
          alt={movie.title}
        />
        <div className="ml-4">
          <p className="mb-3 text-4xl font-semibold leading-none">
            {movie.title}
          </p>
          <dl>
            <dt className="mb-10 font-semibold leading-none text-gray-900">
              {`${movie.length} min | ${movie.date}`}
            </dt>
            <dd className="mb-10 text-gray-500">
              {movie.description}
            </dd>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                className=" inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
                Times and tickets
              </button>
              <button type="button" className="inline-flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
                Trailer
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
    ))}
    

    </>
  );
}

export default Movies;
