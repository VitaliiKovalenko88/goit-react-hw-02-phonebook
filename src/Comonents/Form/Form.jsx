import { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = e.currentTarget;
    const { name, number } = this.state;
    this.props.onSubmit(name, value, number);

    this.reset();
    e.currentTarget.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
