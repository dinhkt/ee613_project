import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"
import "./styles/Seat.css"

const Header = () => {

	const { movies } = useContext(MovieContext)
	const movieData = useContext(MovieContext)

	const GenerateOptions = () => {
		//const {CinemaServiceClient} = require('../cinema_grpc_web_pb')
		//const {Request,Response} = require('../cinema_pb')
		//var client= new CinemaServiceClient('http://localhost:9090',null,null)

		//const request= new Request()
		//request.setName()
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie} - ${moviesObject[movie]}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		const newMoviePrice = movies.movieNames[e.target.value]
		movieData.changeState({...movies, moviePrice: newMoviePrice})
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<select className="movie-selector" onChange={movieSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
