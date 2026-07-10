import { GET_TODOS, FILTER_TASK_PRIORITY, FILTER_TASK_CATEGORY, FILTER_TASK_STATUS, FILTER_TASKNAME_SEARCH} from "./TodosActionTypes";
import { FILTER_TASKDUEDATE_SEARCH,GET_TODO_DETAIL } from "./TodosActionTypes";



const initialState={
    todos:[],
    todoItem:{}
}

const TodosReducer=(state={initialState},action)=>{
    //  console.log(action.type);
    
    switch(action.type){
       
        case GET_TODOS:{
            return{
                ...state,
                todos:action.payload
            }
        }
         case FILTER_TASK_PRIORITY:{
            return{
                ...state,
                todos:action.payload
            }
        }
         case FILTER_TASK_CATEGORY:{
            return{
                ...state,
                todos:action.payload
            }
        }
         case FILTER_TASK_STATUS:{
            return{
                ...state,
                todos:action.payload
            }
        }
        case FILTER_TASKNAME_SEARCH:{
            return{
                ...state,
                todos:action.payload
            }
        }
        case FILTER_TASKDUEDATE_SEARCH:{
            return{
                ...state,
                todos:action.payload
            }
        }
        case GET_TODO_DETAIL:{
            return{
                ...state,
                todoItem:action.payload
            }
        }
        default:return state
    }
}

export default TodosReducer;