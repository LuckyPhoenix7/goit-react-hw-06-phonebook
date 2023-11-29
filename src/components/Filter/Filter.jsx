import { StyledInput, StyledLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <StyledLabel htmlFor="filter">
      Find contact by Name
      <StyledInput
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </StyledLabel>
  );
};
