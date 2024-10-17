import React from 'react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200">
      <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          página no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no hemos podido encontrar la página que busca..
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver a la página principal
            </a>
            <a
              href="/registrarse"
              className="text-sm font-semibold text-gray-900"
            >
              Contactar con el servicio de soporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;