import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
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
          <Label htmlFor="email">Seu e-mail</Label>
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
          <Label htmlFor="password">Sua senha</Label>
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
          <Button type="submit" disabled>
            Carregando...
          </Button>
        ) : (
          <Button type="submit">Entrar no sistema</Button>
        )}
      </form>
    </>
  );
}

export default Signin;
