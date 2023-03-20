import { useState } from 'react';
import '../src/componets/css/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../src/componets/about';
import Atmshop from '../src/componets/shop';
import Errorpage from './componets/page404';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header>
        <nav className="menu">
          <Link className="menu__button" to="/"><h3>Shop</h3></Link>
          <Link className="menu__button" to="/about"><h3>About Us</h3></Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Atmshop />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>

  )
}
export default App



