import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Comonents/Form/Form';

export default class App extends Component {
  state = {
    contacts: [],
  };

  generateId = () => nanoid();

  addContact = (name, value, number) => {
    const dataContacts = {
      id: this.generateId(),
      name,
      number,
    };

    this.setState(prevState => {
      console.log({
        contacts: [dataContacts, ...prevState.contacts],
      });
      return {
        contacts: [dataContacts, ...prevState.contacts],
      };
    });
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
          <ul>
            {this.state.contacts.map(contact => {
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
