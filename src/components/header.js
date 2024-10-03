import React from 'react'
import { Link } from 'react-router-dom' 

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/animales-perdidos"
              className="text-gray-700 hover:text-green-500 transition duration-300"
            >
              Animales perdidos
            </Link>
          </li>
          <li>
            <Link
              to="/animales-encontrados"
              className="text-gray-700 hover:text-green-500 transition duration-300"
            >
              Animales encontrados
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
        <div className="bg-white bg-opacity-90 text-gray-800 text-sm py-2 px-4 rounded-full flex items-center space-x-2 shadow-lg border border-gray-300 hover:bg-opacity-100 transition duration-300">
          <span className="font-bold text-black">Iniciar sesión</span>
          <span className="text-gray-500">/</span>
          <span className="text-blue-500 cursor-pointer hover:text-blue-700">
            Registrarse
          </span>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none">
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
    </header>
  );
}

export default Header