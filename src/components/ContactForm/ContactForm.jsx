import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledBtn,
  StyledError,
  StyledField,
  StyledForm,
} from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Должно быть от 5 букв!')
      .required('Это обязательное поле!'),
    number: Yup.number()
      .required('Это обязательное поле!')
      .min(6, 'Должно быть от 6 цифр!'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">
          Name
          <StyledField name="name" />
          <StyledError component="span" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <StyledField type="number" name="number" />
          <StyledError component="span" name="number" />
        </label>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
