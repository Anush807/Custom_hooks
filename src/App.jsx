import React, { useEffect, useState } from 'react'

import axios from "axios";


function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect( () =>{

    const value = setInterval( () => {
      axios.get("http://localhost:3000/random-todo").then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      
    },n * 1000 )
   
    axios.get("http://localhost:3000/random-todo").then(res => {
      setTodos(res.data.todos);
      setLoading(false);
    })
      
    return () => {
      clearInterval(value)
    }
      
    
  },[n])

return {todos, loading}
}

function App() {

   const {todos, loading} = useTodos(5);

if(loading){
  return (
    <div>
        Loading.....
    </div>
   )
}
  
 
  return (
    <>
      {todos.map(todo => <DisplayTodos todo = {todo}></DisplayTodos>)}
    </>
  )
}

function DisplayTodos({todo}){
  return (

    <div>
    <div>
      {todo.title}
    </div>
  
    <br></br>
    <div>
      {todo.description}
    </div>
  
    </div>
  )

} 



export default App
