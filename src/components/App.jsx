import { useState } from 'react';

import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsData from '../components/contacts.json';

function App() {
  const [contactsList, setContacts] = useState(contactsData);
  const [searchInput, setSearchInput] = useState('');

  const handleDelete = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const getFilteredData = () => {
    return contactsList.filter(
      item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.number.includes(searchInput)
    );
  };

  const filteredData = getFilteredData();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <ContactList contactsList={filteredData} onDelete={handleDelete} />
    </div>
  );
}

export default App;
