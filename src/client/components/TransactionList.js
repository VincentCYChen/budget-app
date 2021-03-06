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
        <tr calssName="tr">
          <td calssName="td">{this.props.transaction.date}</td>
          <td>{this.props.transaction.description}</td>
          <td>${this.props.transaction.amount}</td>
          <td>{this.props.transaction.transactionType}</td>
          <td>{this.props.transaction.category}</td>
          <td>{this.props.transaction.accountName}</td>
          <td>
            <button
              className="button is-primary is-rounded"
              onClick={this.handleShowUpdate}
            >
              update
            </button>
            <button
              className="button is-warning is-rounded"
              id={this.props.transaction.id}
              onClick={this.props.handleDelete}
            >
              delete
            </button>
          </td>
        </tr>
        {this.state.showUpdate ? (
          <UpdateForm
            transaction={this.props.transaction}
            handleShowUpdate={this.handleShowUpdate}
            getList={this.props.getList}
          />
        ) : null}
      </>
    );
  }
}

export default TransactionList;
