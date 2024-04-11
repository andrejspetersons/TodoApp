import ToDo, { TodoItem } from "../TodoItem/TodoItem";


export default function ToDoList({todos,DeleteTodo,UpdateTodo}:
    {todos:TodoItem[],
        DeleteTodo:(id:string)=>void,
        UpdateTodo:(id:string,title:string)=>void}){
    return(
        <div>
            {todos.map(todo=>(
                <div key={todo.id}>
                    <ToDo item={{
                        id:todo.id,
                        title:todo.title,
                        completed:todo.completed,
                    }} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo} ></ToDo>
                </div>
                ))}
            
        </div>
    );
}