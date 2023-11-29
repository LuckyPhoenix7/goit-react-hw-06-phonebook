import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DeleteBtn = styled.button`
  background-color: #ff6b6b;
  color: white;

  padding: 5px 10px;

  border: none;
  border-radius: 5px;

  transition: background-color 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ff3b3b;
  }
`;
