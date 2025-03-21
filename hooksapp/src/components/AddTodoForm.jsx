import { useState } from "react";

const AddTodoForm = ({ addNewTodo }) => {
  const [addTodo, setAddTodo] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    addNewTodo(addTodo);

    setAddTodo("");
  };

  return (
    <form className="mt-4" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form-group">
          <label htmlFor="">Ajouter Todo</label>
          <input
            className="form-control mt-2"
            type="text"
            value={addTodo}
            onChange={(e) => setAddTodo(e.target.value)}
          />
          <input className="btn btn-success mt-4" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
