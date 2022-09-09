import React, { useState } from "react"
import { getOverlayDirection } from "react-bootstrap/esm/helpers"
import { authStore } from "../../context/authContext"
import { FaUserAlt } from "react-icons/fa";


const Login = () => {
  const [username, setUsername] = useState("")
  const { loginUser, error, isLoading } = authStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = username.trim()
    loginUser(user)
  }


  return (
    <form className="login__form" onSubmit={handleSubmit} >


      

      <h3>
        <div><FaUserAlt /></div>
      </h3>

      <div className="form__group">

        <label htmlFor="username">Enter Your</label>
        <input
          type="text"
          id="username"
          placeholder="Username or E-mail"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button disabled={isLoading}>Sign in</button>
        {error && <div className="error">{error}</div>}
      </div>
      
    </form>
  )
}

export default Login
 