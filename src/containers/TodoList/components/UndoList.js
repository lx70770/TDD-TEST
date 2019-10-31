import React from "react";

class UndoList extends React.PureComponent {
  render() {
    const { list, deleteItem } = this.props;
    return (
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div data-test="count" className="undo-list-count">
            {list.length}
          </div>
        </div>
        <ul className="undo-list-content">
          {list.map((item, index) => {
            return (
              <li
                data-test="list-item"
                key={`${item}-${index}`}
                className="undo-list-item"
              >
                {item}
                <span
                  data-test="delete-item"
                  onClick={() => deleteItem(index)}
                  className="undo-list-delete"
                >
                  -
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UndoList;
