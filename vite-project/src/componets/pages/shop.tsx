import { SearchBar } from '../../searchBar';

function Atmshop() {
  return (
    <div>
      <h1 className="shop__name">Bitcoin ATM shop</h1>
      <SearchBar />
      <div className='conteiner'>
        <div className="ATM__grid">
          <div>
            <h2 className="class__description">Genesis-1<img src="../src/assets/genesis1.webp" className="ATM__first" alt="first ATM" />
            </h2><p>The latest model from Lamassu, designed for simplicity and elegance with its steel construction.</p>
          </div>
          <div >
            <h2 className="class__description">Tejo<img src="../src/assets/2sintra-front.png" className="ATM__second" alt="first ATM" />
            </h2><p>The latest model from Lamassu, designed for simplicity and elegance with its steel construction.</p>
          </div>
          <div>
            <h2 className="class__description">Satoshi-1<img src="../src/assets/satoshi1.webp" className="ATM__third" alt="first ATM" />
            </h2><p>The latest model from Lamassu, designed for simplicity and elegance with its steel construction.</p>
          </div>
        </div>
      </div>

      <div className="card">
      </div>

    </div


    >
  );
}

export default Atmshop