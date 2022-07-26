import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import AvisoTop from "./components/AvisoTop/AvisoTop"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cursos from './components/Cursos/Cursos';


function App() {
  return (
    //JSX
    <body>
      <AvisoTop />
      <NavBar />
      <ItemListContainer />
    </body>  
  );
}

export default App;
