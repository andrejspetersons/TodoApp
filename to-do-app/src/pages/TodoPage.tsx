import { useParams } from "react-router-dom"

export default function TodoPage(){
    const params=useParams<{todotitle:string,todoid:string}>();
    console.log(params);
    return(
        <div>{params.todotitle} {params.todoid}</div>
    )
}