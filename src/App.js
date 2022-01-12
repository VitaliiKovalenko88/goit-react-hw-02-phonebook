import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
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

          <button type="submit">Add contact</button>
        </form>
        <h2>Contact</h2>
        <ul>
          {this.state.contacts.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
