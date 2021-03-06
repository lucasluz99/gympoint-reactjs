import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { MdKeyboardArrowLeft as Arrow, MdDone } from 'react-icons/md';

import { Form } from './styles';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Panel from '../../components/Panel';
import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';

import { newStudentRequest } from '../../store/modules/student/actions';

function StudentsNew() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('E-mail é obrigatório'),
    age: Yup.number('Digite uma idade válida').required('Idade é obrigatória'),
    weight: Yup.number('Digite um peso válido').required('Peso é obrigatório'),
    height: Yup.number('Digite uma altura válida').required(
      'Altura é obrigatória'
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
      weight: '',
      height: '',
    },

    onSubmit(data) {
      dispatch(newStudentRequest({ ...data }));
    },
    validationSchema: schema,
  });

  return (
    <>
      <HeaderPage title="Cadastro de aluno">
        <LinkButton background="#666" to="/students">
          <Arrow size={25} color="#fff" />
          Voltar
        </LinkButton>
        <button form="studentNew" type="submit">
          <MdDone size={25} color="#fff" />
          Salvar
        </button>
      </HeaderPage>
      <Panel>
        <Form id="studentNew" onSubmit={formik.handleSubmit}>
          <div>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <span>{formik.errors.name}</span>
            )}
          </div>
          <div>
            <Label htmlFor="email">Endereço de e-mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <div id="flex">
            <div>
              <Label htmlFor="age">Idade</Label>
              <Input
                type="number"
                name="age"
                id="age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              {formik.errors.age && formik.touched.age && (
                <span>{formik.errors.age}</span>
              )}
            </div>

            <div>
              <Label htmlFor="weight">Peso (em KG)</Label>
              <Input
                type="number"
                name="weight"
                id="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
              {formik.errors.weight && formik.touched.weight && (
                <span>{formik.errors.weight}</span>
              )}
            </div>

            <div>
              <Label htmlFor="height">Altura (em metros)</Label>
              <Input
                type="number"
                name="height"
                id="height"
                value={formik.values.height}
                onChange={formik.handleChange}
              />
              {formik.errors.height && formik.touched.height && (
                <span>{formik.errors.height}</span>
              )}
            </div>
          </div>
        </Form>
      </Panel>
    </>
  );
}

export default StudentsNew;
