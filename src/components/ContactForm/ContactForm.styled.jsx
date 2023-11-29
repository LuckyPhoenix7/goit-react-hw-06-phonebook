import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 100%;
  padding: 20px;
  margin: 0 auto;

  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    width: 100%;
  }
`;

export const StyledBtn = styled.button`
  background-color: #1380f6;
  color: white;

  padding: 10px 20px;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;

  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    
    border-color: #1380f6;
    box-shadow: 0px 0px 8px rgba(19, 128, 246, 0.5);
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
