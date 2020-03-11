import React from 'react';

function TransactionList({ transactions, handleDelete }) {
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Transaction Type</th>
          <th>Category</th>
          <th>Account Name</th>
        </tr>
        {transactions.map(transaction => {
          return (
            <tr>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.transactionType}</td>
              <td>{transaction.category}</td>
              <td>{transaction.accountName}</td>
              <td>
                <button>update</button>
                <button onClick={handleDelete}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TransactionList;
