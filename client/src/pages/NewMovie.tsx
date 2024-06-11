import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewMovie() {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const base_url = import.meta.env.VITE_BASE_URL
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const movie = {title, length, date, description, rating}
    
    const response = await fetch(base_url+'/api/movies', {
      method:'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(response)

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok){
      setTitle('')
      setLength('')
      setDate('')
      setDescription('')
      setRating('')
      setError(null)
      console.log('new Movie added')
      navigate("/movies")
    }
  }
  return (
    <form className="flex flex-col  max-w-5xl  mx-auto p-8  mt-3" onSubmit = {handleSubmit}>
      <h1 className="text-5xl p-3 font-bold">Create a new movie</h1>
      <div className="flex flex-row p-6 bg-white border border-gray-200 rounded-lg shadow-lg mb-4">
        <div className="w-full ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
            type="text"
            placeholder="Title of movie"
            onChange = {(e)=> setTitle(e.target.value)}
            value = {title}
          />
        </div>
      </div>

      <div className="flex flex-row p-6 bg-white border border-gray-200 rounded-lg shadow-lg mb-4">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Length
          </label>
          <input
            className="ppearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
            id="grid-first-name"
            type="number"
            placeholder="Length of movie"
            onChange = {(e)=> setLength(e.target.value)}
            value = {length}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="31 Jun 2024"
            onChange = {(e)=> setDate(e.target.value)}
            value = {date}
          />
        </div>
      </div>

      <div className="flex flex-row p-6 bg-white border border-gray-200 rounded-lg shadow-lg mb-4">
        <div className="w-full h-4/6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Description
          </label>
          <textarea
            id="message"
            className=" appearance-none pb-48 pt-3 px-4 mb-3 block w-full bg-gray-200 text-gray-700 border rounded  leading-tight focus:outline-none focus:bg-gray-200"
            placeholder="Write your description here..."
            onChange = {(e)=> setDescription(e.target.value)}
            value = {description}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-row p-6 bg-white border border-gray-200 rounded-lg shadow-lg mb-4">
        <div className="w-full ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Rating
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
            type="number"
            min="1"
            max="10"

            onChange = {(e)=> setRating(e.target.value)}
            value = {rating}
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default NewMovie;
