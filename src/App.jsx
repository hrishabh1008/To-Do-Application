import React from 'react'
import Header from './components/Header'
import { useState } from 'react';
import ToDoList from './components/ToDoList';




const App = () => {


 const [todoList, setTodoList] = useState(() => {
   return JSON.parse(localStorage.getItem("toDoList")) || [];
 });

console.log(todoList)

  
  
  
  

  return (
    <>
      <div className='bg-gray-300 text-center text-2xl font-bold py-4'>WELCOME</div>
      <div className='container mx-auto p-4'>
        <Header />
        <ToDoList todoList={todoList} updateTodoList={setTodoList} />
      </div>
    </>
  )
}

export default App