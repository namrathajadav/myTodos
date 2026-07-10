import { filter_task_priority } from "../Todos/TodosAction";
import axios from "axios";

const FilterTaskPriority=(priority)=>{
    return(dispatch)=>{
        
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskPriority==priority){
                   loadedTasks.push(data[i])
                }
            }
            dispatch(filter_task_priority(loadedTasks));
        })
    }
}

export default FilterTaskPriority;