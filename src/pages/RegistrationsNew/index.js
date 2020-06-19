import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pt from 'date-fns/locale/pt-BR';
import DatePicker, { registerLocale } from 'react-datepicker';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { MdKeyboardArrowLeft as Arrow, MdDone } from 'react-icons/md';

import { addDays, parseISO } from 'date-fns';
import { Form } from './styles';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Panel from '../../components/Panel';
import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';

import { newStudentRequest } from '../../store/modules/student/actions';

registerLocale('pt', pt);
function RegistrationsNew() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  function handleDate(date) {
    setStartDate(date);
    setEndDate(addDays(date, 30));
  }

  const schema = Yup.object().shape({
    student: Yup.string().required('Nome é obrigatório'),
    plan: Yup.string().required('Plano é obrigatório'),

    startDate: Yup.string('Digite uma data válida').required(
      'Data é obrigatória'
    ),
  });

  const formik = useFormik({
    initialValues: {
      student: '',
      plan: '',
      startDate,
    },
    enableReinitialize: true,
    onSubmit(data) {
      dispatch(newStudentRequest({ ...data }));
    },
    validationSchema: schema,
  });

  return (
    <>
      <HeaderPage title="Matrícula de aluno">
        <LinkButton background="#666" to="/registrations">
          <Arrow size={25} color="#fff" />
          Voltar
        </LinkButton>
        <button form="registrationNew" type="submit">
          <MdDone size={25} color="#fff" />
          Salvar
        </button>
      </HeaderPage>
      <Panel>
        <Form id="registrationNew" onSubmit={formik.handleSubmit}>
          <div>
            <Label htmlFor="student">Aluno</Label>
            <Input
              type="text"
              name="student"
              id="student"
              value={formik.values.student}
              onChange={formik.handleChange}
            />
            {formik.errors.student && formik.touched.student && (
              <span>{formik.errors.student}</span>
            )}
          </div>
          <div>
            <Label htmlFor="plan">Plano</Label>
            <Input
              name="plan"
              id="plan"
              value={formik.values.plan}
              onChange={formik.handleChange}
            />
            {formik.errors.plan && formik.touched.plan && (
              <span>{formik.errors.plan}</span>
            )}
          </div>
          <div id="flex33">
            <div>
              <Label htmlFor="height">Preço por mês</Label>
              <Input
                name="price"
                id="price"
                readOnly
                placeholder="Selecione um plano"
              />
            </div>
            <div>
              <Label htmlFor="height">Preço total</Label>
              <Input
                name="priceTotal"
                id="priceTotal"
                placeholder="Selecione um plano"
                readOnly
              />
            </div>
            <div>
              <Label htmlFor="height">Duração em meses</Label>
              <Input
                name="duration"
                id="duration"
                readOnly
                placeholder="Selecione um plano"
              />
            </div>
          </div>

          <div id="flex">
            <div>
              <Label htmlFor="startDate">Data de início</Label>
              <DatePicker
                id="startDate"
                selected={startDate}
                minDate={new Date()}
                locale="pt"
                onChange={(date) => handleDate(date)}
                customInput={<Input />}
              />

              {formik.errors.startDate && formik.touched.startDate && (
                <span>{formik.errors.startDate}</span>
              )}
            </div>

            <div>
              <Label htmlFor="endDate">Data de término</Label>
              <DatePicker
                id="endDate"
                placeholderText="Selecione um plano e data inícial"
                selected={endDate}
                readOnly
                customInput={<Input />}
              />
              {formik.errors.weight && formik.touched.weight && (
                <span>{formik.errors.weight}</span>
              )}
            </div>
          </div>
        </Form>
      </Panel>
    </>
  );
}

export default RegistrationsNew;
