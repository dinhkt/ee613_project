import React, { useState } from "react"
import "./App.css"

import styled from "styled-components"
import Booking from "./Booking"
import Homepage from "./Homepage"
import Payment from "./Payment"
import Login from "./Login"
import MyOrders from "./MyOrders"

import { Route, Link, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
function sayHello() {
	alert('You clicked me!');
}

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const App = () => {
	return (
		<div className="App">
			<Route exact path="/" component={Homepage} />
			<Route exact path="/home" component={Homepage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/booking/:id" component={Booking} />
			<Route exact path="/payment" component={Payment} />
			<Route exact path="/my-orders" component={MyOrders} />
		</div>
	)
}

export default App
