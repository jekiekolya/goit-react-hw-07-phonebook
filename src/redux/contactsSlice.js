import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts;
