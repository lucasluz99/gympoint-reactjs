import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png';

function Signin() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(values) {
      signInRequest(values.email, values.password);
    },
    validationSchema: schema,
  });
  return (
    <>
      <img src={logo} alt="Gympoint" />

      <form onSubmit={formik.handleSubmit}>
        <div>
          <h1>Seu e-mail</h1>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <h1>Sua senha</h1>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}

export default Signin;
