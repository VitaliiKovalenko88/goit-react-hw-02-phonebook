import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
