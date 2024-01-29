import React from "react";
import "./View.css";

function View({ text, status, completeTodo, deleteTodo }) {
  let status_val = "Complete";
  if (status) {
    status_val = "Completed";
  }
  return (
    <div className="row Head">
      <div className="offset-md-2 col-3 col-md-1">
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={completeTodo}
        >
          {status_val}
        </button>
      </div>
      <div className="col col-md-5">
    
        <div style={{ textDecoration: status ? "line-through" : "" }}>
        {text}
        </div>
      </div>
      <div className="col-3 col-md">
        <button className="btn btn-outline-danger btn-sm" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default View;
