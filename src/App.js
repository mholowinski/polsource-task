import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Header from "./Header.js";
import Row from "./Row.js";
import Navigation from "./Navigation.js";
import RowForm from "./RowForm.js";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // const [prios, setPrios] = useState("prio");
  return (
    <div id="container">
      <table>
        <thead>
          <tr>
            <th>Task name</th>
            <th>Priority</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <Row
            todos={todos}

            //prios={prios}
            // deleteTodo={(todoIndex) => {
            //   const newTodos = todos.filter((_, index) => index !== todoIndex);

            //   setTodos(newTodos);
            // }}
          ></Row>
        </tbody>
      </table>

      <RowForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.todoValue.trim();
          const prioValue = todoText.priorityValue;
          console.log(trimmedText + " " + prioValue);
          if (trimmedText.length > 0) {
            // setTodos([...todos.todo, trimmedText]);
            // setTodos([...todos.priority, prioValue]);

            // setPrios([prios, todoText.priorityValue]);
            let todoArray = { todo: trimmedText, priority: prioValue };

            // setTodos((todos) => [...todos, todoArray]);
            setTodos([...todos, todoArray]);
          }
        }}
      ></RowForm>
    </div>
  );
};

render(<App />, document.getElementById("root"));
