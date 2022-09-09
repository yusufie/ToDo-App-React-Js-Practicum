import React from "react"
import { eventStore } from "../context/eventContext"

const ToggleButton = () => {
  const { darkmode } = eventStore()

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        value={darkmode}
        onChange={() => {
          if (darkmode) {
            document.body.classList.remove("dark__mode")
          } else {
            document.body.classList.add("dark__mode")
          }
          eventStore.setState({ darkmode: !darkmode })
        }}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {darkmode ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  )
}

export default ToggleButton
