import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelector';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
};
