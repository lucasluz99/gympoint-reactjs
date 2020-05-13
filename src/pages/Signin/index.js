import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../../components/Input';
import Label from '../../components/Label';
import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png';

function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
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
    onSubmit({ email, password }) {
      dispatch(signInRequest(email, password));
    },
    validationSchema: schema,
  });
  return (
    <>
      <img src={logo} alt="Gympoint" />

      <form onSubmit={formik.handleSubmit}>
        <div>
          <Label for="email">Seu e-mail</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@seuemail.com"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <Label for="password">Sua senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        {loading ? (
          <button type="submit">Carregando...</button>
        ) : (
          <button type="submit">Entrar no sistema</button>
        )}
      </form>
    </>
  );
}

export default Signin;
