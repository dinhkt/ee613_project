import React, { useState, useEffect } from "react"
import "./Booking.css"

import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"
import GithubLogo from './components/GithubLogo'

import MovieContext from './contexts/MovieContext'
import styled from "styled-components"

const axios = require('axios');

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Booking = () => {
	//initial data 
	const url = window.location.href
	const id = url.split("/")[4]
	const [chosenSeats, setChosenSeats] = useState([]);
	const [movie, setMovie] = useState({})
	const [loading, setLoading] = useState(true)
	//call rest api to get movie data
	useEffect(() => {
		axios.get('http://127.0.0.1:7897/movies', {
			params: {
				movieId: id
			}
		})
			.then(function (res) {
				console.log(res)
				if (res.status == 200) {
					let resData = res.data
					setMovie(resData)
					setLoading(false)
				} else {
					console.log(res.status)
				}
			})

	// 	let movie = {
	// 		id: id,
	// 		name: "Avenger",
	// 		moviePrice: 10,
	// 		occupiedSeats: [3, 5, 16, 18, 17, 22, 23]
	// 	}
	// 	setLoading(false)
	// 	setMovie(movie)
	 }, []);

	const handlePayment = () => {
		window.location.href = `/payment?movie-id=${movie.id}&chosen-seats=${chosenSeats}&payment=${movie.moviePrice * chosenSeats.length}`
	}

	return (
		<div className="main container">
			{
				!loading && (<MovieContext.Provider value={{ movie, chosenSeats, changeState: setChosenSeats }}>
					<GithubLogo />
					<SeatMatrix />
					<SeatAvailability />
					<PriceCalculator />
					<Button onClick={handlePayment}> Payment </Button>
				</MovieContext.Provider>)
			}

		</div>
	)
}

export default Booking
