import React, { useEffect } from "react"
import MovieListing from "../../components/MovieListing/MovieListing"
import MovieApi from "../../common/api/MovieApi"
import { ApiKey } from "../../common/api/MovieApiKey"

const Home = () => {
  const movieText = "Harry"
  useEffect(()=>{
   const fetchMovies = async () => {
    const response = await MovieApi
    .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
    .catch((error)=>{
      console.log("Error:", error)
    })
    console.log("THE response from API", response)
  } 
  fetchMovies()
  },[])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home