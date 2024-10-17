import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom'; 
import Header from './header';

function Layout() {
  // Hook para obtener la ubicación actual
  const location = useLocation();

  // Rutas en las que no quieres mostrar el Header
  const noHeaderRoutes = ['/iniciar-sesion', '/registrarse', '/recuperar-contrasena'];

  // Verifica si la ruta contiene 'restablecer-contrasena/token'
  const isTokenRoute = location.pathname.includes('/restablecer-contrasena/token');

  // Verifica si la ruta actual está en `noHeaderRoutes` o es la ruta del token
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname) && !isTokenRoute;

  return (
    <div className='min-h-screen w-full bg-zinc-200'>
      <main className='w-[1200px] max-w-full m-auto p-5'>
        {/* Mostrar Header si la ruta no está en las rutas de exclusión */}
        {shouldShowHeader && <Header />}

        {/* Si no se debe mostrar el header, mostrar el botón de volver al inicio */}
        {!shouldShowHeader && (
          <Link to="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-black rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md">
            <span aria-hidden="false">←</span> Volver al inicio
          </Link>
        )}

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
