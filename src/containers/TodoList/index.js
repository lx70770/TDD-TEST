import React from "react";
import Header from "./components/Header";

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      undoList: []
    };
  }

  addUndoItem = value => {
    const { undoList } = this.state;
    this.setState({ undoList: [...undoList, value] });
  };

  render() {
    const { undoList } = this.state;
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        {undoList.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    );
  }
}

export default TodoList;
