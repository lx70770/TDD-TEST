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
      <div className="Header">
        <div className="Header-content">
          TodoList
          <input
            className="Header-input"
            placeholder="todo"
            onChange={this.handleInputChange}
            onKeyUp={this.handleKeyUp}
            data-test="input"
            value={value}
          />
        </div>
      </div>
    );
  }
}

export default Header;
