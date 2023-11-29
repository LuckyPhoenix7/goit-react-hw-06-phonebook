import { StyledInput, StyledLabel } from './Filter.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <StyledLabel htmlFor="filter">
      Find contact by Name
      <StyledInput onChange={evt => onChangeFilter(evt.target.value)} />
    </StyledLabel>
  );
};
