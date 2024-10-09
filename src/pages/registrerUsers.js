import React from 'react';
import RegisterUserForm from '../components/forms/RegistrerUserForm';

const RegisterUser = () => {
  return (
    
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-2">Crear cuenta</h2>
      <RegisterUserForm />
    </div>
  );
};

export default RegisterUser;
