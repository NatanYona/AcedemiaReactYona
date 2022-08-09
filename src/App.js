import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import AvisoTop from "./components/AvisoTop/AvisoTop"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/context/context';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <body>
          <AvisoTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:CategoryId" element={<ItemListContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </body>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
