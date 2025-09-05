import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <main>
          <Outlet />
        </main>

        <footer>
          <small>© 2025 JCollection React App</small>
        </footer>
      </div>
    </>
  )
}

export default App
