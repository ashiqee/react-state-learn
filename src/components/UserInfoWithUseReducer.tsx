import React, { useReducer, useState } from 'react';

type TAction={
    type: string;
    payload: string;
}

const initialState = {
    name:'',
    age:"",
    hobbies:[] as string[],
}
const reducer = (currentState: typeof initialState,action : TAction)=>{
    switch (action.type){
        case "addName":
            return {...currentState, name : action.payload };
            case "addAge":
                return {...currentState, age : action.payload };
            case "addHobby":
                return {...currentState, hobbies : [...currentState.hobbies,action.payload] };
            default:
                return currentState;
    }
}
const UserInfoWithUseReducer = () => {
    const [state, dispatch]= useReducer(reducer,initialState);

    console.log(state);
    
    return (
        <form>
            <input 
            onChange={(e)=> dispatch({type:"addName", payload: e.target.value})}
            className='border border-purple-300 m-10'
            type='text'
            name='name'
            id="name" 
            placeholder='name'       
            />
            <input 
            onChange={(e)=> dispatch({type:"addAge", payload: e.target.value})}
            className='border border-purple-300 m-10'
            type='number'
            name='age'
            id="age"  
            placeholder='age'      
            />
            <input 
             onChange={(e)=> dispatch({type:"addHobby", payload: e.target.value})}
            className='border border-purple-300 m-10'
            type='text'
            name='hobbies'
            id="hobbies"  
            placeholder='hobby'      
            />

            <button type='submit' className='px-4 p-2 bg-blue-600 rounded-md text-white'>Submit</button>
            
        </form>
    );
};

export default UserInfoWithUseReducer;
