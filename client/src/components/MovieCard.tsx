import { useState } from "react";
import ModalVideo from "react-modal-video";
import { useNavigate } from "react-router-dom";


function MovieCard({ movies }) {
    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState("");
    const navigate = useNavigate();
  
  const handleTrailer = (trailer) => {
    setTrailer(trailer);
    setOpen(true);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-4 xl:p-5">
      {movies &&
        movies.map((movie) => (
          <div key={movie._id} className="bg-white border rounded-lg shadow-md border-gray-200 p-2">

<ModalVideo
              channel="youtube"
              youtube={{ utoplay: 0 }}
              isOpen={isOpen}
              videoId={trailer}
              onClose={() => setOpen(false)}
            />
            <div className="p-2 flex justify-center">
              <img
                className="w-auto h-auto rounded-lg pr-2 cursor-pointer"
                src={`/${movie._id}.jpg`}
                alt={movie.title}
                onClick={() => navigate(`/movies/${movie._id}`)}
              />
            </div>
            <div className="px-4 pb-3">
              <div>
                <p
                  className="mb-3 text-3xl font-semibold leading-none cursor-pointer hover:text-violet-800"
                  onClick={() => navigate(`/movies/${movie._id}`)}
                >
                  {movie.title}
                </p>
              </div>

              <div className="flex gap-3 py-2">
                <p className="hover:text-violet-800">
                  <a href="/u/team-tailwindflex" className="text-sm">
                    {movie.description}
                  </a>
                </p>
              </div>

              <div className="flex items-center justify-between space-x-4 flex-wrap pt-2">
                <div className="flex  space-x-4 flex-wrap">
                  <button
                    type="button"
                    className="inline-flex items-center"
                    onClick={() => navigate(`/movies/${movie._id}`)}
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

                  <button
                    type="button"
                    className="inline-flex items-center"
                    onClick={() => handleTrailer(movie.trailer)}
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
                <div className="flex items-center flex-nowrap">
                  <span className="text-sm dark:text-gray-400">Ratings</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-4 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {movie.rating}/10
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MovieCard;
