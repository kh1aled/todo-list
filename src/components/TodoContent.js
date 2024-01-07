import React, { useEffect, useRef, useState } from 'react'
import './TodoContentStyles.css';
const getDataFromLocal =()=>{
  const data = localStorage.getItem('todos')
  if(data){
    return JSON.parse(data)
  }else{
    return [];
  }
}
const TodoContent = () => {
  const [todos,setTodos] = useState(getDataFromLocal())
  const input =useRef()
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const handle = () => {
    const text = input.current.value;
    let newItem = { text , completed:false }
    setTodos([...todos,newItem]);
    input.current.value="";
    input.current.focus()
  } 
  console.log(todos)
  const handleItem = (index)=>{
    const newTodos = todos.slice();
    newTodos[index].completed= !newTodos[index].completed;
    setTodos(newTodos)
  }
  const handleItemDel = (index)=>{
    const newTodos = todos.slice();
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
 
  return (
    <div className='todo-content'>
    <div className='todo-title'>
        <h1>todo list</h1>
    </div>
    
        <input type='text' placeholder='✍️add todo' ref={input} className='theInput'/>
        <input type='submit' value={"submit"} onClick={handle} className='btn'/>

    <div className='list-item'>

            <ul>
            {todos.map((item,index) => {
              return(
                <div className='item'>
 <li key={index} /*style={{textDecoration : item.completed ? "line-through": "none"}}*/  className={item.completed? "done" : ""}  onClick={()=>handleItem(index)}>{item.text}</li>
 <span onClick={()=>handleItemDel(index)} className='delete'>❌</span>
                </div>
              )
            })}
              
            </ul>

    </div>

    </div>
  )
}

export default TodoContent
