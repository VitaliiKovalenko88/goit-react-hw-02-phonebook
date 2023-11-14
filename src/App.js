import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  generateId = () => nanoid();

  addContact = (name, value, number) => {
    const dataContacts = {
      id: this.generateId(),
      name,
      number,
    };

    const searchSameContact = this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === value.toLowerCase();
    });

    if (searchSameContact) {
      alert(`"${name}" вже є в вашому списку`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [dataContacts, ...prevState.contacts],
      };
    });
  };

  onChangeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h2>PhoneBook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList contacts={this.getVisibleContacts()} />
      </div>
    );
  }
}
