import React from "react";
import { ContactInfo } from "styles/Contacts.styled";
import { Contact } from "styles/Contacts.styled";
import { DeleteBtn } from "styles/Contacts.styled";
import { ImAddressBook } from "react-icons/im";
import { ContactsList } from "styles/Contacts.styled";
import { connect } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-actions";

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsList>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <ContactInfo>
              <ImAddressBook /> {name}: {number}
            </ContactInfo>
            <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
              Delete
            </DeleteBtn>
          </Contact>
        ))}
      </ContactsList>
    </div>
  );
};

const getFilterContacts = (allContacts, filter) => {
  const normalizedFilterValue = filter.toLowerCase().trim();

  const filtredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilterValue)
  );
  return filtredContacts;
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  return {
    contacts: getFilterContacts(items, filter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
