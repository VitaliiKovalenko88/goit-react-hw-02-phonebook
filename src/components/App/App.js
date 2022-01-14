import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

const Container = styled.div`
  text-align: center;
`;

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  generateId = () => nanoid();

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  addContact = (name, number) => {
    const dataContact = {
      id: this.generateId(),
      name,
      number,
    };

    const searchSameContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (searchSameContact) {
      alert(`Ну шо не видно, что ${name} таки есть уже?????!!!`);
      return;
    }

    this.setState(({ contacts }) => {
      console.log({ contacts: [dataContact, ...contacts] });
      return { contacts: [dataContact, ...contacts] };
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
