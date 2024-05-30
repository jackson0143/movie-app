import { useState, useEffect } from 'react'
function Movies() {
  const [movies, setMovies] = useState(null)


  useEffect(()=> {
    const fetchData = async ()=> {
      const response = await fetch('http://localhost:5050/api/movies')
      const json = await response.json()

      if (response.ok){
        setMovies(json)
      
      }
    }

    


    fetchData()
  }, [])
  return (
    <div>
    <div>Movies</div>
    {movies && movies.map((movie) => (
      <p key={movie._id}>Movie title:{movie.title} and rating: {movie.rating}</p>
      
    ))}

    
  </div>
  )
}

export default Movies