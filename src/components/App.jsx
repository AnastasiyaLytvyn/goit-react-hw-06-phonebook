import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitlePhone, TitleContacts } from '../App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (values, reset) => {
    const { name, number } = values;
    const newContact = { id: nanoid(), name, number };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
    reset();
  };

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm onSubmit={addContacts} />
      <TitleContacts>Contacts</TitleContacts>

      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
}
