import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const NewTodo = ({ onTodoCreate }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const createNewTodo = () => {
    onTodoCreate(newTodoText);
    setNewTodoText("");
  };

  return (
    <div className="Add-new-todo">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="wpisz zadanie do wykonania"
          value={newTodoText}
          onChange={event => setNewTodoText(event.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={createNewTodo}>
            Dodaj
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default NewTodo;
