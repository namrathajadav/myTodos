import { filter_task_category} from "../Todos/TodosAction";
import axios from "axios";

const FilterTaskCategory=(category)=>{
    return(dispatch)=>{
        
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskCategory==category){
                   loadedTasks.push(data[i])
                }
            }
            dispatch(filter_task_category(loadedTasks));
        })
    }
}

export default FilterTaskCategory;