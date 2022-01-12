import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  nameInputId = () => nanoid();

  //   addTodoContact = () => {
  //     const todoContact = {
  //       id: this.nameInputId,
  //       name: this.state.name,
  //     }
  //     this.setState(({contacts}) => {
  // contacts.push([todoContact]);

  //     })
  //   }

  handleSubmite = e => {
    e.preventDefault();

    const todoContact = {
      id: this.nameInputId(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(({ contacts }) => {
      console.log({ contacts: [todoContact, ...contacts] });
      return { contacts: [todoContact, ...contacts] };
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmite}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contact</h2>
        <ul>
          {this.state.contacts.map(({ name, id, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
