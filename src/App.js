import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { authStore } from "./context/authContext"

import { Home, Layout, Login, Error } from "./pages"

function App() {
  const { user } = authStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App