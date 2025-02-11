import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setDotos] = useState([
    { id: 1, todo: "Acheter du lait" },
    { id: 2, todo: "Acheter du pain" },
    { id: 3, todo: "Acheter du fromage" },
  ]);

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.todo}
      </li>
    );
  });

  const addNewTodo = (newTodo) => {
    setDotos([
      ...todos,
      {
        id: uuidv4(),
        todo: newTodo,
      },
    ]);
  };

  return (
    <div>
      <h1 className="text-center">{todos.length} To-do(s)</h1>

      <ul className="list-group">{myTodos}</ul>

      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;
