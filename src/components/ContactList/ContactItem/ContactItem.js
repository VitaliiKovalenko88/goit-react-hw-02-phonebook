import PropTypes from 'prop-types';

export const ContactItem = ({ name, id, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
