import { useState } from "react";
import { Link } from "react-router-dom";


export type TodoItem={
    id:string;
    title:string;
    completed:boolean;
}


    

export default function ToDo({item,DeleteTodo,UpdateTodo}:{item:TodoItem,DeleteTodo:(id:string)=>void,UpdateTodo:(id:string,text:string)=>void}){
    const [edit,setEdit]=useState(false)
    const [editText,setEditText]=useState(item.title)

    const hadleDeleteClick=()=>{
        DeleteTodo(item.id)
    }

    const handleLostFocus=()=>{
        setEdit(false)
        UpdateTodo(item.id,editText)
    }

    return(
        <>
            <input type="checkbox" defaultChecked={item.completed}></input>          
                {edit?(
                    <input type="text"
                    value={editText}
                    onChange={e=>setEditText(e.target.value)}
                    onBlur={handleLostFocus}    
                    />
                    )
                :(<Link to={`todo/${item.title}/${item.id}`}>{item.title}</Link>)
                }
       
                <button type="button" className="btn btn-outline-success btn-sm mx-1" onClick={()=>setEdit(true)}>Edit</button>
                <button type="button" className="btn btn-outline-danger btn-sm mx-1" onClick={hadleDeleteClick}>Delete</button>

        </>
    );
    
}