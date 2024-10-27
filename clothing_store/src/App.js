import './App.css';
import './css/style.css';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogProduct from './pages/CatalogProduct';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Registration from "./pages/registration";
import Cart from "./pages/Cart";

const baseUrl = "";

function App() {
  return (
    <>
      <BrowserRouter basename={baseUrl}>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/catalog/:productId" element={<CatalogProduct/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/registration" element={<Registration/>}/>
          {/*<Route path="*" element={<NotFount/>}/>*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;