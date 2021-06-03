import React, { useState, useEffect } from "react"
const axios = require('axios');

const MyOrders = () => {
    const username = window.localStorage.getItem("username")
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [score,setScore]=useState()
    useEffect(() => {
        //call api to get orders by username
        axios.get('http://127.0.0.1:7897/order', {
            params: {
                username:username
            }
        })
            .then(function (res) {
                if (res.status == 200) {                    
                    setOrders(res.data)
                    setLoading(false)
                } else {
                    console.log(res.status)
                }
        })
        // let sampleOrders = [
        //     {
        //         username: "thao",
        //         movie: "Avenger",
        //         chosenSeats: [1, 2, 3],
        //         status: "unpaid"
        //     },
        //     {
        //         username: "thao",
        //         movie: "Batman",
        //         chosenSeats: [11, 12, 13],
        //         status: "paid"
        //     }
        // ]
        //setLoading(false)
        //setOrders(sampleOrders)

    }, []);

    useEffect(() => {
        //call api to get orders by username
        axios.get('http://127.0.0.1:7897/score', {
            params: {
                username:username
            }
        })
            .then(function (res) {
                if (res.status == 200) {                    
                    setScore(res.data)
                } else {
                    console.log(res.status)
                }
        })

    }, []);
    return (
        <div className="payment-container">
            <div className="payment">
                <h4 className="payment-title">My Orders</h4>
                {
                    !loading && (
                        orders.map(order => {
                            return (
                                <>
                                    <h5 className="payment-title-2">{order.movie}</h5>
                                    <h6>Chosen seats: {order.chosenSeats.toString()}</h6>
                                </>
                            )
                        })
                    )
                }
                <h5 className="payment-title">My Discount Score</h5>
                {
                    <h6>Earned Discount Score: {score}</h6>
                }
            </div>
        </div >
    )
}

export default MyOrders
