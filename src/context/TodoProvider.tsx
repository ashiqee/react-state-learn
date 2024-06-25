import React, { createContext } from 'react';


type TodoProviderProps ={
    children : React.ReactNode
}

const TodoProvider = ({children}: TodoProviderProps) => {
    const TodoContext = createContext(undefined);

    const values = {
        todoTitle : 'This is a title'
    }
    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;