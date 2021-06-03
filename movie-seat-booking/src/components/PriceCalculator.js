import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"

const PriceCalculator = () => {
	const { movie, chosenSeats } = useContext(MovieContext)
	return (
		<div>
			<p>Selected {chosenSeats.length} seats and the total price is ${chosenSeats.length * movie.moviePrice}</p>
		</div>
	)
}

export default PriceCalculator
