import { StyledList, ListItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contactsBook, onDelete }) => {
  return (
    <StyledList>
      {contactsBook.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <DeleteBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </StyledList>
  );
};
