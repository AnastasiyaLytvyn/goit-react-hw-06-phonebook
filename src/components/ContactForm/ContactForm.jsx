import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { addContacts } from 'redux/contacts/contactsSlice';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { useState } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = () => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContacts({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
          <Field className={css.input} type="text" name="name" required />
          <ErrorMessage className={css.error} name="name" component="p" />
        </label>
        <label className={css.label} htmlFor="number">
          Number
          <Field className={css.input} type="tel" name="number" required />
          <ErrorMessage className={css.error} name="number" component="p" />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
