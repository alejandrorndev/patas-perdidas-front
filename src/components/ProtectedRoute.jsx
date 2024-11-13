import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    console.log(user);

    // Si no hay un usuario autenticado, redirige al login
    return user ? children : <Navigate to="/iniciar-sesion" />;
};

export default ProtectedRoute;
