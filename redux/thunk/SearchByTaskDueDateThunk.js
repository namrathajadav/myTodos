import { filter_taskduedate_search} from "../Todos/TodosAction";
import axios from "axios";

const SearchByTaskDueDate=(taskDueDate)=>{
    return(dispatch)=>{
        
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskDueDate == taskDueDate){
                   loadedTasks.push(data[i])
                }
            }
            // console.log(loadedTasks);
             dispatch(filter_taskduedate_search(loadedTasks));
        })
    }
}

export default SearchByTaskDueDate;