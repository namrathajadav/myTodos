import { get_todos } from "../Todos/TodosAction";
import axios from "axios";
import TodosReducer from "../Todos/TodosReducer";

const GetTodos=()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            dispatch(get_todos(data))
        })
    }
}

export default GetTodos;