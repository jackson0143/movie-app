import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import SessionTimes from "../components/SessionTimes";
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`/api/movies/${id}`);
      const json = await response.json();

      if (response.ok) {
        setMovie(json);
      }
    };
    fetchMovie();
  }, [id]);



 


  return (
    <>
      {movie && (
        <div className="flex justify-center pt-5">
          <ModalVideo
            channel="youtube"
            youtube={{ autoplay: 0 }}
            isOpen={isOpen}
            videoId={movie.trailer}
            onClose={() => setOpen(false)}
          />
          <div className="flex flex-row p-12 bg-white border border-gray-200 rounded-lg shadow-lg">
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
                <dd className="mb-10 text-gray-500">{movie.description}</dd>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="inline-flex items-center"
                    onClick={() => setOpen(true)}
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
                
              </dl>
          <SessionTimes></SessionTimes>

            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
