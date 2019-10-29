import React from "react";

class Header extends React.PureComponent {
  state = {
    value: ""
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyUp = e => {
    const { value } = this.state;
    if (e.keyCode === 13 && value) {
      this.props.addUndoItem(value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          data-test="input"
          value={value}
        />
      </div>
    );
  }
}

export default Header;
