import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import AvisoTop from "./components/AvisoTop/AvisoTop"
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Contacto from './pages/Contacto';
import Checkout from './pages/checkout';
import Productos from './pages/product';
import extensiones from './pages/extension';
import login from './pages/login';
import home from './pages/home';
import Detail from './pages/details';



function App() {
  return (

    <BrowserRouter>
    <body>
      <AvisoTop />
      <NavBar />
      <Routes>
        <Route path="" element={home} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Detail />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/login" element={<login />} />
      </Routes>
    </body>
    </BrowserRouter>  
  );
}

export default App;
