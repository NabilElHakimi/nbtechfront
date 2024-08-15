import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './view/Pages/Home/Home';
import Products from './view/Pages/Products/Products';
import ProductSolo from './view/Pages/ProductSolo/product-solo';
import Header from './view/components/Header';
import Footer from './view/components/Footer';
import 'flowbite';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='flex justify-center bg-gray-100 mt-14'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductSolo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;