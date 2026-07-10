import { get_todo_detail } from "../Todos/TodosAction";
import axios from "axios";

const getTodoDetails=(id)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/todos/${id}`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            // console.log(data);
            dispatch(get_todo_detail(data))
        })
    }
}

export default getTodoDetails;