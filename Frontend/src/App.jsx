import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Modals from './components/modals/Modals'

function App() {
  return (
    <>
      <div>
        <Navbar />

        <main>
          <Outlet />
        </main>
        <Modals />
        <footer>
          <small>© 2025 JCollection React App</small>
        </footer>
      </div>
    </>
  )
}

export default App
