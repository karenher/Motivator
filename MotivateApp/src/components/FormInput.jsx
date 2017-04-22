import React from 'react';
import Button from './Button';
//import s from './button_style.css';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {needsButton: false};
  }

  render() {
    return (
      <form>
        <input type="text" style={{height:40}} />
        {this.state.needsButton &&
        <Button value={this.props.textVal != null ? this.props.textVal : 'Click Here'}  />
        }
      </form>
    );
  }
}

export default FormInput;
