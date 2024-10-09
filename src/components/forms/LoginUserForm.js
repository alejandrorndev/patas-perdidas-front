import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../componentsbase/Input';
import Button from '../componentsbase/Button';
import FormLayout from '../componentsbase/FormLayout';


const validationSchema = Yup.object({
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  contrasena: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('La contraseña es obligatoria'),
});

const LoginForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const loginData = {
      email: values.email,
      contrasena: values.contrasena,
    };

    try {
      const response = await axios.post('http://localhost:5002/api/usuarios/inicio-sesion', loginData);
      const accessToken = response.data.data.accessToken;
      
      // Guardar el accessToken en localStorage
      localStorage.setItem('token', accessToken);

      toast.success('Inicio de sesión exitoso!');
      resetForm();
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;

        if (statusCode === 401) {
          toast.error('Credenciales incorrectas. Verifica tu correo o contraseña.');
        } else if (statusCode === 500) {
          toast.error('Error del servidor. Por favor, inténtelo de nuevo más tarde.');
        } else {
          toast.error('Error en el envío de datos. Por favor, inténtelo de nuevo.');
        }
      } else if (error.request) {
        toast.error('No se recibió respuesta del servidor. Verifica tu conexión.');
      } else {
        toast.error('Ocurrió un error inesperado.');
      }
    }
  };

  const handleCancel = (resetForm) => {
    resetForm(); // Restablece el formulario a su estado inicial
  };

  return (
    <FormLayout title={<div className="text-center">Inicio de sesión</div>}>
      <Formik
        initialValues={{ email: "", contrasena: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, resetForm }) => (
          <Form>
            <div className="mb-4">
              <Input
                label="Correo electrónico"
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
                placeholder="Introduce tu contraseña"
                value={values.contrasena}
                onChange={handleChange}
              />
              <ErrorMessage
                name="contrasena"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="text-center mb-4">
              <a
                href="/recuperar-contrasena"
                className="text-blue-500 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div className="flex justify-center gap-12 mt-4">
              <Button text="Iniciar sesión" type="submit" color="blue" />
              <Button
                text="Cancelar"
                type="button"
                color="red"
                onClick={() => handleCancel(resetForm)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default LoginForm;
