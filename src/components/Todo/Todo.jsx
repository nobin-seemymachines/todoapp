import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Todo.css";
import { addTodo } from "../redux/todoSlice";

function Todo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value) {
      dispatch(addTodo({ title: value }));
      setValue("")
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-md-2 col-8 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-4 col-md-2">
          <button className="btn btn-outline-success" onClick={onSubmit}>
            Add Todo
          </button>
        </div>
      </div>
      {/* <div className="row text">
        <div className="offset-md-2 offset-2 text-info">{value}</div>
      </div> */}
    </div>
  );
}

export default Todo;
