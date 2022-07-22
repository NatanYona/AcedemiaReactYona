import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import AvisoTop from "./components/AvisoTop/AvisoTop"
import Cursos from './components/Cursos/Cursos';


function App() {
  return (
    //JSX
    <body>
      <AvisoTop />
      <NavBar />
      <Cursos />
    </body>  
  );
}

export default App;
