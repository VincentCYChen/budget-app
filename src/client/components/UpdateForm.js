import React from 'react';
import axios from 'axios';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.transaction.id,
      date: this.props.transaction.date,
      description: this.props.transaction.description,
      amount: this.props.transaction.amount,
      transactionType: this.props.transaction.transactionType,
      category: this.props.transaction.category,
      accountName: this.props.transaction.accountName
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.id;
    let value = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
      transactionType: this.state.transactionType,
      category: this.state.category,
      accountName: this.state.accountName
    };
    axios
      .put(`/api/${id}`, value)
      .then(() => this.props.handleShowUpdate())
      .then(() => this.props.getList())
      .catch(err => console.log(err));
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <tr>
        <td>
          <input
            className="input"
            type="text"
            name="date"
            placeholder={this.state.date}
            value={this.state.date}
            onFocus={e => {
              e.target.type = 'date';
            }}
            onBlur={e => {
              e.target.type = 'text';
            }}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="description"
            placeholder={this.state.description}
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            type="number"
            name="amount"
            placeholder={this.state.amount}
            value={this.state.amount}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="transactionType"
            value={this.state.transactionType}
            placeholder={this.state.transactionType}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="category"
            placeholder={this.state.category}
            value={this.state.category}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="accountName"
            placeholder={this.state.accountName}
            value={this.state.accountName}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <input
            className="input"
            className="button is-primary is-rounded"
            type="submit"
            value="submit"
            onClick={this.handleSubmit}
          />
        </td>
      </tr>
    );
  }
}

export default UpdateForm;
