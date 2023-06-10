
import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Home from './Home';
import Cursos from './Cursos';
import Login from './Login';
import HomeLog from './Logueado/HomeLog';
import CursoLog from './Logueado/CursoLog';
import AlumnLog from './Logueado/AlumnLog';
import CursoCreate from './Logueado/CursoCreate';
import AlumnCreate from './Logueado/AlumnCreate';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homelog" element={<HomeLog />} />
        <Route path="/logueado/cursolog" element={<CursoLog />} />
        <Route path="/logueado/cursocreate" element={<CursoCreate />} />
        <Route path="/logueado/alumnlog" element={<AlumnLog />} />
        <Route path="/logueado/alumncreate" element={<AlumnCreate />} />
        <Route path="/logueado/alumncreate:aluID" element={<AlumnCreate />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
