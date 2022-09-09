import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { eventStore } from "../../context/eventContext"
import { Navbar } from "../../components"
import { FaGithub } from "react-icons/fa"



const Layout = () => {
  const { backdropStatus } = eventStore()

  return (
    <Fragment>
      <div
        className={
          backdropStatus
            ? "backdrop__container"
            : "backdrop__container disabled"
        }
      ></div>

      <header>
        <Navbar />
      </header>

      <main className="main__content">
        <Outlet />
      </main>

      <footer className="icon_github">
        <FaGithub />
      </footer>

    </Fragment>
  )
}

export default Layout
