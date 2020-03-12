import React from 'react';
import axios from 'axios';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: null,
      amount: null,
      transactionType: null,
      category: null,
      accountName: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state after submit --->', this.state);
    const value = this.state;
    axios
      .post('api', value)
      .then(data => this.props.getList())
      .then(
        this.setState({
          date: '',
          description: '',
          amount: '',
          transactionType: '',
          category: '',
          accountName: ''
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="box">
        <div className="field is-horizontal">
          <form>
            <label className="label">
              New transaction:
              <div className="field-body">
                <input
                  className="input"
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="number"
                  name="amount"
                  placeholder="$"
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="text"
                  name="transactionType"
                  value={this.state.transactionType}
                  placeholder="Debit/Credit"
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="text"
                  name="category"
                  placeholder="category"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="text"
                  name="accountName"
                  placeholder="account name"
                  value={this.state.accountName}
                  onChange={this.handleInputChange}
                />
              </div>
            </label>
            <input
              className="button is-primary is-rounded"
              type="submit"
              value="submit"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EntryForm;
