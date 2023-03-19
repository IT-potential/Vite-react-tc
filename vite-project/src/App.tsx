import { useState } from 'react';
import '../src/componets/css/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../src/componets/about';
import Atmshop from '../src/componets/shop';
import Errorpage from './componets/404';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <nav className="menu">
        <Link to="/">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/404">404</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Atmshop />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Errorpage />} />
      </Routes>

      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
    </div>
    
  )
}
export default App



