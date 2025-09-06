import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigations from './components/header/Navigations'
import Modals from './components/modals/Modals'

function App() {
  return (
    <>
      <div>
        <Navigations />

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
