import { useState } from "react";

type FormProps = {
    AddTodo: (title: string) => Promise<void>;
  };

export default function Form({AddTodo}:FormProps){
    const [item, setItem] = useState("");

    async function handleOnSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(item==="") return
        await AddTodo(item);
    }
    return(
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={e=>setItem(e.target.value)}/>
            <button>Add ToDo</button>
        </form>
    )
}