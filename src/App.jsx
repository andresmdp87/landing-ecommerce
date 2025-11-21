
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import CategoriesListContainer from './components/CategoriesListContainer/CategoriesListContainer'
import ProductsListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import Contact from './components/Contact/Contact'
import Cupones from './components/Cupones/Cupones'
import NotFound from './components/NotFound/NotFound'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <div>
      <BrowserRouter>
       <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<CategoriesListContainer/>}/>
            <Route path="/products/:categoryId" element={<ProductsListContainer/>}/>
            <Route path="/product/:productId" element={<ProductDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cupones" element={<Cupones/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
