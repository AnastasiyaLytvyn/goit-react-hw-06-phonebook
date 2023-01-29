import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContacItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
