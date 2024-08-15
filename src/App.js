import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './view/Pages/Home/Home';
import Products from './view/Pages/Products/Products';
import Header from './view/components/Header';
import Footer from './view/components/Footer';
import 'flowbite';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
