import PropTypes from 'prop-types';

export const Contact = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
