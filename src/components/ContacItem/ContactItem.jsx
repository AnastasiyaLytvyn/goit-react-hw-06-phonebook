import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsSlice';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
