import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Inicio from './components/inicio/inicio';
import Lista from './components/lista/lista';
import Detalle from './components/tarjeta/detalle/detalle';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/lista' element={<Lista />} />
          <Route path='/details/:name' element={<Detalle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
