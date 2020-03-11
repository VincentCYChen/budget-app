import React from 'react';
import UpdateForm from './UpdateForm.js';

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false
    };
    this.handleShowUpdate = this.handleShowUpdate.bind(this);
  }

  handleShowUpdate() {
    console.log('clicked!', this.state.showUpdate);
    this.setState({ showUpdate: !this.state.showUpdate });
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.transaction.date}</td>
          <td>{this.props.transaction.description}</td>
          <td>${this.props.transaction.amount}</td>
          <td>{this.props.transaction.transactionType}</td>
          <td>{this.props.transaction.category}</td>
          <td>{this.props.transaction.accountName}</td>
          <td>
            <button onClick={this.handleShowUpdate}>update</button>
            <button
              id={this.props.transaction.id}
              onClick={this.props.handleDelete}
            >
              delete
            </button>
          </td>
        </tr>
        {this.state.showUpdate ? (
          <UpdateForm transaction={this.props.transaction} />
        ) : null}
      </>
    );
  }
}

export default TransactionList;
