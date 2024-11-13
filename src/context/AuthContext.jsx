import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para iniciar sesión (ejemplo básico)
    const login = (userData) => {
        setUser(userData);
        sessionStorage.setItem('token', JSON.stringify(userData));
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('token');
    };

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setUser({ token: storedToken }); // Guarda el token directamente
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};
