import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { MdKeyboardArrowLeft as Arrow, MdDone } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { Form } from './styles';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Panel from '../../components/Panel';
import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';

import { editPlanRequest } from '../../store/modules/plan/actions';

function PlansEdit() {
  const dispatch = useDispatch();
  const [initial, setInitial] = useState({});

  const { id } = useParams();

  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório'),
    duration: Yup.number('Digite uma idade válida').required(
      'Idade é obrigatória'
    ),
    price: Yup.number('Digite um peso válido').required('Peso é obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      title: initial.title,
      duration: initial.duration,
      price: initial.price,
      priceTotal: initial.priceTotal,
    },
    enableReinitialize: true,

    onSubmit(data) {
      dispatch(editPlanRequest({ ...data, id }));
    },
    validationSchema: schema,
  });

  useEffect(() => {
    async function loadPlan() {
      const { data } = await api.get(`/plans?id=${id}`);

      setInitial({
        title: data.title,
        duration: Number(data.duration),
        price: Number(data.price),
        priceTotal: formatPrice(data.duration * data.price),
      });
    }

    loadPlan();
  }, []);

  return (
    <>
      <HeaderPage title="Edição de Planos">
        <LinkButton background="#666" to="/plans">
          <Arrow size={25} color="#fff" />
          Voltar
        </LinkButton>
        <button form="plansEdit" type="submit">
          <MdDone size={25} color="#fff" />
          Salvar
        </button>
      </HeaderPage>
      <Panel>
        <Form id="plansEdit" onSubmit={formik.handleSubmit}>
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

export default PlansEdit;
