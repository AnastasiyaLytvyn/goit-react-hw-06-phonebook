import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
