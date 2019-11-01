import React from "react";

class UndoList extends React.PureComponent {
  render() {
    const { list, deleteItem, changeStatus, handleBlur } = this.props;
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
                key={index}
                onClick={() => changeStatus(index)}
                className="undo-list-item"
              >
                {item.status === "div" ? (
                  item.value
                ) : (
                  <input
                    onBlur={() => handleBlur(index)}
                    value={item.value}
                    data-test="input"
                  />
                )}
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
