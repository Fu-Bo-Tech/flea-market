import React from 'react';
import { Button } from 'belle';
const btnStyles = {
  paddingTop: 3,
  paddingBottom: 3,
};
const nameStyle = {
  lineHeight: '34px',
};

class BidForm extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidForm';
  }
  render() {
    return (
      <tr>
        <td style={nameStyle}>Elaine</td>
        <td><input className="form-control" type="number" /></td>
        <td><input className="form-control" type="text" /></td>
        <td><Button primary style={btnStyles}>Submit</Button></td>
      </tr>
    );
  }
}

export default BidForm;