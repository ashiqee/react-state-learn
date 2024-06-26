import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoProvider';

const TodoForm = () => {
    const {state,dispatch}= useContext(TodoContext)
    const [task,setTask]= useState('');
    console.log(state);

    const handleSubmit =(e)=>{
       e.preventDefault()
        const todo ={
            id: Math.random().toString(36).substring(2,7),
            title: task,
            isCompleted: false,
        }

        dispatch({type:"addTodo",payload:todo})
        
    }
    
    return (
        <div>
            <h1>Add Todo</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Todo">Task</label>
                <input 
                className='border p-2 bg-fuchsia-100'
                onBlur={(e)=>setTask(e.target.value)}
                type="text" name='todo' id='todo' />
                <button type='submit' className='p-2 bg-blue-600 px-2'>Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;