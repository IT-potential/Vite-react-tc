import { useState } from 'react';
import '../src/componets/css/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './componets/pages/about';
import Atmshop from './componets/pages/shop';
import Errorpage from './componets/pages/page404';


function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setOpen] = useState(true)
  return (
    <div className="App">
      {/* <button onClick={() => setOpen(!isOpen)}>Open</button> */}
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



