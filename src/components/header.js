import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado al hacer clic en el botón
  };

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        {/* Enlaces de navegación visibles solo en pantallas medianas o más grandes */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/mascotas-perdidos"
              className="text-gray-700 hover:text-green-500 transition duration-300"
            >
              Mascotas perdidos
            </Link>
          </li>
          <li>
            <Link
              to="/mascostas-encontrados"
              className="text-gray-700 hover:text-green-500 transition duration-300"
            >
              Mascotas encontrados
            </Link>
          </li>
          <li>
            <Link
              to="/testimonios"
              className="text-gray-700 hover:text-green-500 transition duration-300"
            >
              Testimonios
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex bg-white bg-opacity-90 text-gray-800 text-sm py-2 px-4 rounded-full items-center space-x-2 shadow-lg border border-gray-300 hover:bg-opacity-100 transition duration-300">
          <Link to="/iniciar-sesion">
            <span className="font-bold text-black">Iniciar sesión</span>
          </Link>
          <span className="text-gray-500">/</span>
          <Link to="/registrarse">
            <span className="text-blue-500 cursor-pointer hover:text-blue-700">
              Crear cuenta
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            to="/mascotas-perdidos"
            className="block text-gray-700 hover:text-green-500 transition duration-300"
          >
            Mascotas perdidos
          </Link>
          <Link
            to="/mascostas-encontrados"
            className="block text-gray-700 hover:text-green-500 transition duration-300"
          >
            Mascotas encontrados
          </Link>
          <Link
            to="/testimonios"
            className="block text-gray-700 hover:text-green-500 transition duration-300"
          >
            Testimonios
          </Link>
          <Link
            to="/iniciar-sesion"
            className="block text-black font-bold hover:text-green-500 transition duration-300"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/registrarse"
            className="block text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Crear cuenta
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
