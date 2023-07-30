import React from 'react';

export const TodoItem = ({todo}) => {
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-success">Completed</button>
    <button className="btn btn-sm btn-danger mx-3">Delete</button>
    </div>
  );
}

export default TodoItem;
