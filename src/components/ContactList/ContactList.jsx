import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { getIsLoading, getFilteredContacts } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
} from './ContactList.styled';

import Button from '../Button';

import { Box } from '../Box';
import { useEffect } from 'react';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {isLoading ? (
        <ThreeDots color="#00aeff" />
      ) : (
        <ContactsList>
          {filteredContacts.map(contact => {
            return (
              <ContactItem key={contact.id}>
                <Icon />
                <NameContact>
                  {contact.name}: {contact.phone}
                </NameContact>
                <Button
                  type="button"
                  name="Delete"
                  onClick={() => deleteContactReducer(contact.id)}
                />
              </ContactItem>
            );
          })}
        </ContactsList>
      )}
    </Box>
  );
}

export default ContactList;
