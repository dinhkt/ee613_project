import React, { useState ,useEffect} from "react"
import { useLocation } from "react-router-dom";
import "./Payment.css";
import Switch from "react-switch"

const axios = require('axios');

const Payment = () => {
    const url = useLocation();
    const movieId = new URLSearchParams(url.search).get("movie-id")
    const strChosenSeats = new URLSearchParams(url.search).get("chosen-seats")
    const chosenSeats = strChosenSeats.split(",").map(seat => Number(seat))
    const payment = new URLSearchParams(url.search).get("payment")
    const user = window.localStorage.getItem("username")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [score,setScore] = useState();
    const [finalpayment,setFinal]=useState(payment);
    const [checked,setChecked]=useState(false);

    useEffect(() => {
		axios.get('http://127.0.0.1:7897/score', {
			params: {
				username: user
			}
		})
			.then(function (res) {
				console.log(res)
				if (res.status == 200) {
					let resData = res.data
					setScore(resData)
				} else {
					console.log(res.status)
				}
			})
	 }
	 , []);

    const handlePay = () => {
        axios.post('http://127.0.0.1:7898/transaction', {
            username,
            password,
            amount: finalpayment,
            receiver: "cinema"
        })
            .then(function (res) {
                if (res.status==200) {
                    axios.post('http://127.0.0.1:7897/order', {
                        id_movie:movieId,
                        seat:chosenSeats,
                        username:user
                    })
                        .then(function (res) {
                            if(res.status){
                                alert("Booking success!")
                                window.location.href = `/home`
                            }
                        });
                
                    axios.post('http://127.0.0.1:7897/score', {
                            username:user,
                            earned_score:finalpayment,
                            spent_score:checked.toString()
                    })
                        .then(function (res) {
                            if(res.status){
                                alert("You earned "+finalpayment+" score!")
                                window.location.href = `/home`
                            }
                        });

                } else {
                    alert("Transaction fail")
                }
            })
    }
    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSwitchChange = nextChecked => {
        setChecked(nextChecked);
        if (!checked)
            setFinal(payment-score/10);
        else
            setFinal(payment);
    }
    return (
        <div className="payment-container">
            <div className="payment">
                <h4 className="payment-title">Payment Details</h4>
                <h5 className="payment-title-2">Bank Account Details</h5>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Username</label>
                            <input class="form-control" placeholder="Username" onChange={handleOnChangeUsername} />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password" onChange={handleOnChangePassword} />
                        </div>
                    </div>
                </form>
                <h5 className="payment-title-2">Receiver</h5>
                <h6 className="payment-value">CINEMA</h6>
                <h5 className="payment-title-2">Total Payment</h5>
                <h6 className="payment-value">$ {payment}</h6>
                <h5>
                    <span className="payment-title-2">Use Discount Score </span>
                    <Switch className="react-switch"  onChange={handleSwitchChange} checked={checked} />  
                </h5>                                
                <h6 className="payment-value"> {score} points</h6>             
                <h6 className="payment-value">- ${score/10} </h6>
                <h5 className="payment-title-2">Final Payment</h5>
                <h6 className="payment-value">$ {finalpayment}</h6>
                <hr />
                <div className="payment-footer">
                    <div className="pay-btn" onClick={handlePay}>Pay</div>
                </div>
            </div>
        </div>
    )
}

export default Payment
