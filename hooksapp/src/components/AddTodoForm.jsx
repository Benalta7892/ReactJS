import { useState } from "react";

const AddTodoForm = () => {
  return (
    <form className="mt-4">
      <div className="card card-body">
        <div className="form-group">
          <label htmlFor="">Ajouter Todo</label>
          <input className="form-control mt-2" type="text" />
          <input className="btn btn-success mt-4" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
