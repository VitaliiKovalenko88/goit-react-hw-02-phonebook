import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  generateId = () => nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.name;

    this.setState(prevState => ({
      contacts: [value, ...prevState.contacts],
    }));
    this.reset();
    e.currentTarget.reset();
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <section>
          <h2>PhoneBook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              return <li key={this.generateId()}>{contact}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
