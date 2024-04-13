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

    function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
        setItem(e.target.value)
    }
    return(
        <form onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleOnChange}/>
                <button type="submit" className="btn btn-primary mx-1">Add ToDo</button>
        </form>
    )
}