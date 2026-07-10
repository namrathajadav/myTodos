import axios from 'axios';
import { add_new_todo } from '../Todos/TodosAction';

const AddNewTodos=(data)=>{
    return(dispatch)=>{
        axios.post(`http://localhost:3001/todos`,data)
        .then((res)=>{
            return res.data
        }).then((data)=>{
           
        })
    }
}

export default AddNewTodos;