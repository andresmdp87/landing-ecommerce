
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import CategoriesListContainer from './components/CategoriesListContainer/CategoriesListContainer'
import ProductsListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import Contact from './components/Contact/Contact'
import Cupones from './components/Cupones/Cupones'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<CategoriesListContainer/>}/>
          <Route path="/products/:categoryId" element={<ProductsListContainer/>}/>
          <Route path="/product/:productId" element={<ProductDetailContainer/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cupones" element={<Cupones/>}/>
          <Route path="/notFound" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
