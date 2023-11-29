import { StyledList, ListItem, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const visibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {visibleContact.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </StyledList>
  );
};
