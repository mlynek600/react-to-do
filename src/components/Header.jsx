import React from "react";

const Header = ({ todos, userName }) => (
  <header className="App-header">
    <h4 className="bg-info text-white text-center p-3">
      Lista zadań użytkownika {userName} (Liczba zadań do zrobienia:{" "}
      {todos.filter(item => !item.done).length})
    </h4>
  </header>
);

export default Header;
