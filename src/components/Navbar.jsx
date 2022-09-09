import React, { Fragment } from "react"
import { authStore } from "../context/authContext"
import ToggleButton from "./ToggleButton"

const Navbar = () => {
  const user = authStore((state) => state.user)
  const logout = authStore((state) => state.logout)

  const handleLogout = () => {
    logout()
  }
  return (
    <Fragment>
      <h3>
        React Practicum
      </h3>

      <nav>
        {user && (
          <ul>
            <li>
              <p>Let's Do It! {user.username}</p>
            </li>
            <li>
              <a href="!#" type="button" onClick={handleLogout}>
                Sign Out
              </a>
            </li>
          </ul>
        )}
      </nav>

      <h4>
          <div className="toggle__navbar">
            <ToggleButton />
          </div>
      </h4>
    </Fragment>
  )
}

export default Navbar
