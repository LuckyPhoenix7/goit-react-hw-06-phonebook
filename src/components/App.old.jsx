import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Layout, FirstTitle, SecondTitle } from './Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (this.state.contacts.some(({ name }) => name === newContact.name)) {
      alert(`Контакт ${newContact.name} уже существует!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  contactFilter = value => {
    this.setState(prevState => ({
      ...prevState,
      filter: value,
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <FirstTitle>Phonebook</FirstTitle>
        <ContactForm addContact={this.addContact} />

        <SecondTitle>Contacts</SecondTitle>
        <Filter onChangeFilter={this.contactFilter} />

        <ContactList
          contactsBook={visibleContact}
          onDelete={this.deleteContact}
        />
      </Layout>
    );
  }
}
