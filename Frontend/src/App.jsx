import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { fetchTest } from './services/test';

function App() {
  
  const test = () => fetchTest()
  
  // ✅ onMounted (runs once when component mounts)
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  
  return (
    <>
      <div>
        <nav>
          <button onClick={test}>test</button>
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
