import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../componentsbase/Input';
import Button from '../componentsbase/Button';
import FormLayout from '../componentsbase/FormLayout';
import Select from '../componentsbase/Select';


// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  contrasena: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('La contraseña es obligatoria'),
  rol: Yup.string().required('El perfil es obligatorio')
});

const RegisterUserForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const userData = {
      nombre: values.nombre,
      email: values.email,
      contrasena: values.contrasena,
      rol: values.rol,
      estado: "1" // Estado activo por defecto
    };
    
    try {
        const response = await axios.post('http://localhost:5002/api/usuarios', userData);
        console.log('status', response.status);
        if(response.status === 201){
          toast.success('Registro exitoso!');
          resetForm();
        }
 
       // window.location.href = '/iniciar-sesion';
      } catch (error) {
        if (error.response) {
          // Si el error tiene respuesta del servidor, obtenemos el código de estado
          const statusCode = error.response.status;
      
          if (statusCode === 409) {
            toast.error('El correo electrónico ingresado ya está registrado. Por favor, intenta con otro.');
            resetForm();
          } else if (statusCode === 500) {
            toast.error('Error del servidor. Por favor, inténtelo de nuevo más tarde.');
          } else {
            toast.error('Error en el envío de datos. Por favor, inténtelo de nuevo.');
          }
        } else if (error.request) {
          // Si no hubo respuesta por parte del servidor
          toast.error('No se recibió respuesta del servidor. Verifica tu conexión.');
        } else {
          // Errores al configurar la solicitud
          toast.error('Ocurrió un error inesperado.');
        }
      
        //console.error('Error en el envío de datos:', error);
      }
      
  };

  const handleCancel = (resetForm) => {
    resetForm(); // Restablece el formulario a su estado inicial
  };

  return (
    <FormLayout title={<div className="text-center">Crear cuenta</div>} >
      <Formik
        initialValues={{ nombre: "", email: "", contrasena: "", rol: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, resetForm }) => (
          <Form>

            <div className="mb-4">
              <Input
                label="Nombre"
                name="nombre"
                placeholder="pedro perez"
                value={values.nombre}
                onChange={handleChange}
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <Input
                label="Coreo electronico"
                name="email"
                type="email"
                placeholder="tunombre@midominio.com"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <Input
                label="Contraseña"
                name="contrasena"
                type="password"
                placeholder="0987654"
                value={values.contrasena}
                onChange={handleChange}
              />
              <ErrorMessage
                name="contrasena"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <Select
                label="Perfil"
                name="rol"
                value={values.rol}
                onChange={handleChange}
                options={[
                  { value: "2", label: "Usuario" },
                  { value: "1", label: "Administrador" },
                ]}
              />
              <ErrorMessage
                name="rol"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex justify-center gap-12 mt-4">
            <Button text="Registrarse" type="submit" color="blue"/>
            <Button text="Cancelar" type="button" color="red" onClick={() => handleCancel(resetForm)}/>
            </div>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default RegisterUserForm;
