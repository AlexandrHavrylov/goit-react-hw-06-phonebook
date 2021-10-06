import React from "react";
import { ContactInfo } from "styles/Contacts.styled";
import { Contact } from "styles/Contacts.styled";
import { DeleteBtn } from "styles/Contacts.styled";
import { ImAddressBook } from "react-icons/im";
import { ContactsList } from "styles/Contacts.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-actions";

const Contacts = () => {
  const getFilterContacts = (allContacts, filter) => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    const filtredContacts = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    return filtredContacts;
  };

  const contacts = useSelector((state) =>
    getFilterContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsList>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <ContactInfo>
              <ImAddressBook /> {name}: {number}
            </ContactInfo>
            <DeleteBtn
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </ContactsList>
    </div>
  );
};

export default Contacts;
