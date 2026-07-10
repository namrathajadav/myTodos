import { filter_taskname_search} from "../Todos/TodosAction";
import axios from "axios";

const SearchByTaskNames=(taskName)=>{
    return(dispatch)=>{
        
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskName.toLowerCase() == taskName.toLowerCase()){
                   loadedTasks.push(data[i])
                }
            }
            // console.log(loadedTasks);
            dispatch(filter_taskname_search(loadedTasks));
        })
    }
}

export default SearchByTaskNames;