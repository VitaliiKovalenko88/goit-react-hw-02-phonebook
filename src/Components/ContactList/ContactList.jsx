import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
