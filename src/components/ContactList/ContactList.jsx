import Contact from './Contact/Contact';

const ContactList = ({ contactsList }) => {
  console.log(contactsList);
  if (!contactsList.length) {
    return <h2>No Data</h2>;
  }
  return (
    <ul>
      {contactsList.map(contactItem => (
        <Contact key={contactItem.id} contactsList={contactsList} />
      ))}
    </ul>
  );
};

export default ContactList;
