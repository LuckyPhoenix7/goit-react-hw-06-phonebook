import styled from 'styled-components';

export const StyledLabel = styled.label`
  color: #333;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;

  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;

    border-color: #1380f6;
    box-shadow: 0px 0px 8px rgba(19, 128, 246, 0.5);
  }
`;
