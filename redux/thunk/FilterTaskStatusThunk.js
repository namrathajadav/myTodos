import { filter_task_status} from "../Todos/TodosAction";
import axios from "axios";

const FilterTaskStatus=(status)=>{
    return(dispatch)=>{
        
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskStatus==status){
                   loadedTasks.push(data[i])
                }
            }
            dispatch(filter_task_status(loadedTasks));
        })
    }
}

export default FilterTaskStatus;