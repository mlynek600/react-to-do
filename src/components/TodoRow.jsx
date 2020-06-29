import React from "react";

const TodoRow = ({ task, done, onDoneToggle, item }) => (
  <tr>
    <td>{item.task}</td>
    <td>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onDoneToggle(item)}
      />
    </td>
  </tr>
);

export default TodoRow;
