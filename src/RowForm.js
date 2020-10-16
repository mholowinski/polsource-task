import React, { useState } from "react";

const RowForm = ({ saveTodo }) => {
  const [rowValue, setRowValue] = useState({
    todoValue: "todo",
    priorityValue: "",
  });

  function handleChange(evt) {
    //setRowValue(evt.target.value);
    const value = evt.target.value;
    setRowValue({
      ...rowValue,
      [evt.target.name]: value,
    });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //?
        saveTodo(rowValue); //?
        setRowValue({
          todoValue: "",
          priorityValue: "",
        });
      }}
    >
      <input
        placeholder="enter task"
        type="text"
        name="todoValue"
        onChange={handleChange}
        value={rowValue.todoValue}
      ></input>

      <select
        onChange={handleChange}
        value={rowValue.priorityValue}
        name="priorityValue"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="submit" placeholder="Priority"></input>
    </form>
  );
};

export default RowForm;
