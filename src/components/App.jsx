import { useState } from 'react';

import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsData from '../components/contacts.json';

function App() {
  const [contactsList, setContacts] = useState(contactsData);

  const handleDelete = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contactsList={contactsList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
