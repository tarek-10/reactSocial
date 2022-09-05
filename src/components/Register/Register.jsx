import React from 'react'
import "./Register.css"
const Register = () => {
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginlogo">TarekSocial</h3>
              <span className="loginDesc">
                Connect With Friends and the world <br /> around you on TarekSocial.
              </span>
            </div>
            <div className="loginRight">
              <div className="registerBox">
                <input placeholder="userName" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginBtn">Sign Up</button>
                <button className="loginRegisterButton">
                  Log Into Account
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Register