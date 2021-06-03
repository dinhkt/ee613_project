import React, { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username =="tuyen" && password=="123"){    
            window.localStorage.setItem("username", username)
            window.location.href = "/home"
        }
        else alert("Wrong username or password")
    }
    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="payment-container">
            <div className="payment">
                <h4 className="payment-title">Login</h4>
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            <input class="form-control" placeholder="" onChange={handleOnChangeUsername} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" placeholder="" onChange={handleOnChangePassword} />
                        </div>
                    </div>
                </form>
                <div className="payment-footer">
                    <div className="pay-btn" onClick={handleLogin}>Submit</div>
                </div>
            </div>
        </div >
    )
}

export default Login
