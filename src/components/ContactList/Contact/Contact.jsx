import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

const Contact = ({ item, onDelete }) => {
  const { name, number, id } = item;
  return (
    <>
      <li>
        <h2>
          <IoPerson />
          {name}
        </h2>
        <p>
          <a href={`tel:+${number}`}>
            <FaPhone />
            {number}
          </a>
        </p>
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
