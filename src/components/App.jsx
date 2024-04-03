import { useState } from 'react';

import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsData from '../components/contacts.json';
function App() {
  const [contactsList, setContacts] = useState(contactsData);
  // console.log(contactsData);
  // console.log(contactsList);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contactsList={contactsList} />
    </div>
  );
}

export default App;
