import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import RegisterUser from './pages/registrerUsers';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/registrarse' element={<RegisterUser />} />
          <Route path='/iniciar-sesion' element={<Login />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
      <ToastContainer   position="top-center" 
      />
    </BrowserRouter>
  );
}

export default App;
