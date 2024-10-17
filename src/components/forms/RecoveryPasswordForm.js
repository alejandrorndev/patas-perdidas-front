import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../componentsbase/Input';
import Button from '../componentsbase/Button';
import FormLayout from '../componentsbase/FormLayout';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La nueva contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas no coinciden')
    .required('Debe confirmar la contraseña')
});

const ResetPasswordForm = () => {
  const { token } = useParams();

  const handleSubmit = async (values, { resetForm }) => {
    const passwordData = {
      newPassword: values.newPassword,
    };

    try {

      const response = await axios.post(`http://localhost:5002/api/usuarios/recuperar-contrasena/${token}`, passwordData);

      console.log('response', response);
      toast.success('Tu contraseña ha sido restablecida exitosamente.');
      resetForm();
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 404) {
          toast.error('No se encontró la cuenta. Verifica tu información.');
        } else if (statusCode === 500) {
          toast.error('Error del servidor. Inténtalo nuevamente.');
        } else {
          toast.error('Hubo un problema con el envío. Inténtalo de nuevo.');
        }
      } else if (error.request) {
        toast.error('No hubo respuesta del servidor. Revisa tu conexión.');
      } else {
        toast.error('Ocurrió un error inesperado.');
      }
    }
  };

  const handleCancel = (resetForm) => {
    resetForm(); // Restablece el formulario
  };

  return (
    <FormLayout title={<div className="text-center">Cambiar Contraseña</div>}>
      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, resetForm }) => (
          <Form>
            {/* Campo Nueva Contraseña */}
            <div className="mb-4">
              <Input
                label="Nueva Contraseña"
                name="newPassword"
                type="password"
                placeholder="Escribe tu nueva contraseña"
                value={values.newPassword}
                onChange={handleChange}
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Campo Confirmar Contraseña */}
            <div className="mb-4">
              <Input
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                placeholder="Confirma tu nueva contraseña"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Botones */}
            <div className="flex justify-center gap-12 mt-4">
              <Button text="Cambiar Contraseña" type="submit" color="green" />
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

export default ResetPasswordForm;
