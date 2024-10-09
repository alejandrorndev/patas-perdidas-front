import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../componentsbase/Input';
import Button from '../componentsbase/Button';
import FormLayout from '../componentsbase/FormLayout';
import Select from '../componentsbase/Select';


// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  contrasena: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
  rol: Yup.string().required('El rol es obligatorio')
});

const RegisterUserForm = () => {
  const handleSubmit = (values) => {
    const userData = {
      nombre: values.nombre,
      email: values.email,
      contrasena: values.contrasena,
      rol: values.rol,
      estado: "1" // Estado por defecto
    };
    
    // Enviar el objeto JSON al backend
    console.log(userData); // Aquí puedes hacer la petición al backend
  };

  const handleCancel = (resetForm) => {
    resetForm(); // Restablece el formulario a su estado inicial
  };

  return (
    <FormLayout title="Registro de Usuario">
      <Formik
        initialValues={{ nombre: "", email: "", contrasena: "", rol: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, resetForm }) => (
          <Form>

            <div className="mb-4">
              <Input
                label="Usuario"
                name="nombre"
                placeholder="sunombre"
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
                  { value: "1", label: "Usuario" },
                  { value: "2", label: "Administrador" },
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
