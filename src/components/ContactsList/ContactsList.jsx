import { Contact } from 'components/Contact/Contact';
import { Text } from 'components/Contact/Contact.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { Item, List, ListTitle } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ListTitle>Your Contacts</ListTitle>
      {contacts.length ? (
        filteredContacts.length ? (
          <List>
            {filteredContacts.map(contact => (
              <Item key={contact.id}>
                <Contact contact={contact} />
              </Item>
            ))}
          </List>
        ) : (
          <Text>No matches found!</Text>
        )
      ) : (
        <Text>No contacts yet, use a form above to add some!</Text>
      )}
    </>
  );
};
