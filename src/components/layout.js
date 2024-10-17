import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom'; 
import Header from './header';

function Layout() {
  // Hook para obtener la ubicación actual
  const location = useLocation();
  
  // Rutas en las que no quieres mostrar el Header
  const noHeaderRoutes = ['/iniciar-sesion', '/registrarse', '/recuperar-contrasena'];
  
  // Verifica si la ruta actual está en `noHeaderRoutes`
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className='min-h-screen w-full bg-zinc-200'>
      <main className='w-[1200px] max-w-full m-auto p-5'>
        {shouldShowHeader && <Header />}
        {!shouldShowHeader && (
          <Link to="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-balckrounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md">
      <span aria-hidden="false">←</span>Volver al inicio 
          </Link>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
