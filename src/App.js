import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Sell from './pages/Sell';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Shops from './pages/Shops';
import Cart from './pages/Cart';
import Learning from './pages/Learning';
import ShopOwnerSignup from './pages/ShopOwnerSignup';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/shop-owner-signup" element={<ShopOwnerSignup />} />
        <Route path="/contact" element={<div style={{ padding: '2rem' }}>Contact Page</div>} />
        <Route path="/cart" element={<div style={{ padding: '2rem' }}>Cart Page</div>} />
        <Route path="/signup" element={<div style={{ padding: '2rem' }}>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
