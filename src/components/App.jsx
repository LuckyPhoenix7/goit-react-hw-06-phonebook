import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Layout, FirstTitle, SecondTitle } from './Layout';

export const App = () => {
  return (
    <Layout>
      <FirstTitle>Phonebook</FirstTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Layout>
  );
};
