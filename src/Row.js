import React from "react";

const Row = ({ todos, deleteTodo }) =>
  // <div id="row">
  //   <div className="rowChild"> To jest nazwa zadania</div>
  //   <div className="rowChild"> priorytet</div>
  //   <input className="checkbox"></input>
  // </div>

  todos.map((todo, index) => (
    <tr key={index.toString()}>
      <td>{todo}</td>
      <td>{}</td>
      <td>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

export default Row;
