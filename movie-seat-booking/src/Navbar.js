import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/booking">Booking</Link></li>
        </ul>
    )
}

export default Navbar;