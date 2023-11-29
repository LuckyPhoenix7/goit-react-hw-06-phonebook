import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Layout, FirstTitle, SecondTitle } from './Layout';

export const App = () => {
  const initialContacts = () => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  };

  const [contacts, setContacts] = useState(initialContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`Контакт ${newContact.name} уже существует!`);
    } else {
      setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const contactFilter = value => {
    setFilter(value);
  };

  const visibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <FirstTitle>Phonebook</FirstTitle>
      <ContactForm addContact={addContact} />

      <SecondTitle>Contacts</SecondTitle>
      <Filter onChangeFilter={contactFilter} />

      <ContactList contactsBook={visibleContact} onDelete={deleteContact} />
    </Layout>
  );
};
