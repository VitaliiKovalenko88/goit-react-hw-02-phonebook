import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Comonents/Form/Form';

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
        <section>
          <h2>PhoneBook</h2>
          <Form onSubmit={this.addContact} />
        </section>
        <section>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onChangeFilter}
          />
          <ul>
            {this.getVisibleContacts().map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
