import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWithClass from './components/CounterWithClassComponents';
import CounterWithFuncComponents from './components/CounterWithFuncComponents';
// import UserInfoWithUseState from './components/UserInfoWithUseState';
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer';
import TodoProvider from './context/TodoProvider';
import TodoForm from './components/Todo/TodoForm';

function App() {
  const [count,setCount]= useState(0)
  return (
    <TodoProvider>
  <div className="border border-green-500 p-10 m-10">
     {/* <CounterWithClass/> */}
     {/* <h2>Count={count}</h2>
     <CounterWithFuncComponents count={count} setCount={setCount}/> */}
     {/* <UserInfoWithUseState/> */}
     {/* <UserInfoWithUseReducer/> */}
     <TodoForm/>
    </div>
    </TodoProvider>
  
  );
}

export default App;
