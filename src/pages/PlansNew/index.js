import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { MdKeyboardArrowLeft as Arrow, MdDone } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import { Form } from './styles';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Panel from '../../components/Panel';
import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';

import { newPlanRequest } from '../../store/modules/plan/actions';

function PlansNew() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório'),
    duration: Yup.number('Digite uma idade válida').required(
      'Idade é obrigatória'
    ),
    price: Yup.number('Digite um peso válido').required('Peso é obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      duration: '',
      price: '',
      priceTotal: '',
    },

    onSubmit(data) {
      dispatch(newPlanRequest({ ...data }));
    },
    validationSchema: schema,
  });

  return (
    <>
      <HeaderPage title="Cadastro de Planos">
        <LinkButton background="#666" to="/plans">
          <Arrow size={25} color="#fff" />
          Voltar
        </LinkButton>
        <button form="plansNew" type="submit">
          <MdDone size={25} color="#fff" />
          Salvar
        </button>
      </HeaderPage>
      <Panel>
        <Form id="plansNew" onSubmit={formik.handleSubmit}>
          <div>
            <Label htmlFor="title">Título do plano</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title && (
              <span>{formik.errors.title}</span>
            )}
          </div>
          <div id="flex">
            <div>
              <Label htmlFor="duration">Duração (em meses)</Label>
              <Input
                type="number"
                name="duration"
                id="duration"
                min={1}
                value={formik.values.duration}
                onChange={formik.handleChange}
              />
              {formik.errors.duration && formik.touched.duration && (
                <span>{formik.errors.duration}</span>
              )}
            </div>

            <div>
              <Label htmlFor="price">Preço Mensal</Label>
              <Input
                type="number"
                name="price"
                id="price"
                min={0}
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.errors.price && formik.touched.price && (
                <span>{formik.errors.price}</span>
              )}
            </div>

            <div>
              <Label htmlFor="priceTotal">Preço total</Label>
              <Input
                readOnly
                type="text"
                name="priceTotal"
                id="priceTotal"
                value={formatPrice(
                  formik.values.duration * formik.values.price
                )}
                onChange={formik.handleChange}
              />
              {formik.errors.priceTotal && formik.touched.priceTotal && (
                <span>{formik.errors.priceTotal}</span>
              )}
            </div>
          </div>
        </Form>
      </Panel>
    </>
  );
}

export default PlansNew;
