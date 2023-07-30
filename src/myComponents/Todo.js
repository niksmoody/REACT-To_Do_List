import React from 'react';
import {TodoItem} from '../TodoItem';

export const Todo = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>To Do List</h3>
      {props.todos.map((todos)=>{
        return <TodoItem todo={todos}/>
      })}
    </div>
  );
}

export default Todo;