import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: null,
        date: null,
        description: null,
        amount: null,
        transactionType: null,
        category: null,
        accountName: null
      }
    };
  }

  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default UpdateForm;
