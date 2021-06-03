import React, { useContext } from "react"
import Seat from './Seat'
import './styles/Seat.css'

import MovieContext from "../contexts/MovieContext"

const GenerateSeats = (seatNumbers, occupiedSeats) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					if (occupiedSeats.includes(seatNumber)) {
						return <Seat seatno={seatNumber} seatColor={"seat-black"} key={seatNumber} />
					}
					else {
						return <Seat seatno={seatNumber} key={seatNumber} />
					}

				})
			}
		</div>
	)
}

const SeatMatrix = (props) => {
	const { movie, changeState, chosenSeats } = useContext(MovieContext)
	return (
		<div className="movie-complex">
			<img class="screen" src="/screen.png"></img>
			<div className="container row movie-layout">
				<div className="movie-column-1">
					{GenerateSeats([1, 2, 3, 4], movie.occupiedSeats)}
					{GenerateSeats([5, 6, 7, 8], movie.occupiedSeats)}
					{GenerateSeats([9, 10, 11, 12], movie.occupiedSeats)}
				</div>
				<div className="movie-column-2">
					{GenerateSeats([13, 14, 15, 16, 17], movie.occupiedSeats)}
					{GenerateSeats([18, 19, 20, 21, 22], movie.occupiedSeats)}
					{GenerateSeats([23, 24, 25, 26, 27], movie.occupiedSeats)}
					{GenerateSeats([28, 29, 30, 31, 32], movie.occupiedSeats)}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([33, 34, 35, 36], movie.occupiedSeats)}
					{GenerateSeats([37, 38, 39, 40], movie.occupiedSeats)}
					{GenerateSeats([41, 42, 43, 44], movie.occupiedSeats)}
				</div>
			</div>
		</div>
	)
}

export default SeatMatrix
