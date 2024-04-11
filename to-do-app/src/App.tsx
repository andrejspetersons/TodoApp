import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import { TodoItem } from './components/TodoItem/TodoItem'
import ToDoList from './components/List/TodoList'
import axios, { AxiosError } from 'axios'

function App(){
  const[items,setItems]=useState<TodoItem[]>([])
  const url="http://localhost:3004"

  const AddTodo=async(title:string)=>{
    try{
      const response=await axios.post<TodoItem>(`${url}/todos`,{title,completed:false})
      const newItem=response.data
      setItems(currentTodoItems=>{
        return([
          ...currentTodoItems,newItem
        ])
      })
    }
    catch(e){
      console.log(e);
    }
  }

  const DeleteTodo=async(id:string)=>{
    try{
      const response=await axios.delete<TodoItem>(`${url}/todos/${id}`)
      const itemOnDelete=response.data
      setItems(currentTodoItems=>{
        return(
          currentTodoItems.filter(todo=>todo.id!==itemOnDelete.id)
      )
      })
    }
    catch(e){
     console.log(e);
    }
  }

  const UpdateTodo=(id:string,text:string)=>{
    const updatedList=items.map((item)=>{
      if(item.id===id){
        item.title=text
      }
      return item;
    })

    setItems(updatedList)
  }

  return (
    <>
      <Form AddTodo={AddTodo}></Form>
      <ToDoList todos={items} 
      DeleteTodo={DeleteTodo}
      UpdateTodo={UpdateTodo}
      ></ToDoList>
    </>
  )

}

export default App;
