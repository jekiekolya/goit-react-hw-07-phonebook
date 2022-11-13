import { ContactForm, ContactList, Filter } from '../components';

import { Box } from './Box';
import { MainTitle, SecondaryTitle } from './App.styled';

export function App() {
  return (
    <Box bg="mainBg" color="text" padding="30px">
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Box>
  );
}
