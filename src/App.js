import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import RegisterUser from './pages/registrerUsers';
import Login from './pages/login';
import ForgetPassword from './pages/forgetpassword';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/resetpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/registrarse' element={<RegisterUser />} />
            <Route path='/iniciar-sesion' element={<Login />} />
            <Route path='/recuperar-contrasena' element={<ForgetPassword />} />
            <Route path='/restablecer-contrasena/:token' element={<ResetPassword />} />

            {/* Rutas protegidas */}
            <Route 
              path='/detalle/:slug' 
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
