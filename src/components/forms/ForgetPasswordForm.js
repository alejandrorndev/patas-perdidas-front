import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../componentsbase/Input';
import Button from '../componentsbase/Button';
import FormLayout from '../componentsbase/FormLayout';

const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('El correo es obligatorio')
  });

  const ForgetPasswordForm = () => {
    const handleSubmit = async (values, { resetForm }) => {
      const ForgetPasswordData = {
        email: values.email,
      };
  
      try {
        const response = await axios.post('http://localhost:5002/api/usuarios/restablecer-contrasena', ForgetPasswordData);
       
        console.log('response',response)
  
        toast.success('Se genero el enlace exitosamente!');
        resetForm();
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
  
          if (statusCode === 404) {
            toast.error('¡Ups!Correo no encontrado.Por favor, verifica que hayas escrito correctamente el correo electrónico y vuelve a intentarlo.');
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
      <FormLayout title={<div className="text-center">Restablecer contraseña</div>}>
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
  
              <div className="flex justify-center gap-12 mt-4">
                <Button text="Restablecer" type="submit" color="green" />
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
  
  export default ForgetPasswordForm;