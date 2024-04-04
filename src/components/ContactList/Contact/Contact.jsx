const Contact = ({ item, onDelete }) => {
  const { name, number, id } = item;
  return (
    <>
      <li>
        <h2>{name}</h2>
        <p>{number}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    </>
  );
};

export default Contact;

{
  /* {contactsList.map(({ id, name, number }) => (
  <li key={id}>
    <h2>{name}</h2>
    <p>{number}</p>
  </li>
))} */
}
