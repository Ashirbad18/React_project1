import React,{useState} from 'react';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todo, setTodo] = useState([])

  useEffect(()=>{

    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
 },[])

//  Add task functionality
 const addTask = ()=>{
   const newTask = {
    id:Date.now(),
    text,
   };
   setTodo(todo.unshift(newTask))
   localStorage.setItem("todos", JSON.stringify(todo));
   alert("New Task Added");
   setTodo(JSON.parse(localStorage.getItem('todos')));
 };

// Delete Task Function
 const deleteTask = (id)=>{
  const filteredTodos = todo.filter(item => item.id !== id);
  localStorage.getItem("todos", JSON.stringify(filteredTodos));
  setTodo(filteredTodos);
};

 return (
   <>
    <Navbar/>
    <TodoForm addTask= {addTask}/>
    <TodoList todo={todo} deleteTask={deleteTask}/>
  </>
 );
};

export default App
