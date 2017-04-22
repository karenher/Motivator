import React from 'react';
import s from './button_style.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

Button.defaultProps = {
  value: "Click Here"
};

export default Button;
