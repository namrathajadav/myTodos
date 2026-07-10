import { GET_TODOS, FILTER_TASK_PRIORITY, FILTER_TASK_CATEGORY, FILTER_TASK_STATUS, FILTER_TASKNAME_SEARCH} from "./TodosActionTypes";
import { FILTER_TASKDUEDATE_SEARCH, GET_TODO_DETAIL } from "./TodosActionTypes";

export const get_todos=(data)=>{
   return{
    type:GET_TODOS,
    payload:data
   }
}

export const filter_task_priority=(data)=>{
   return{
    type:FILTER_TASK_PRIORITY,
    payload:data
   }
}

export const filter_task_category=(data)=>{
   return{
    type:FILTER_TASK_CATEGORY,
    payload:data
   }
}
export const filter_task_status=(data)=>{
   return{
    type:FILTER_TASK_STATUS,
    payload:data
   }
}

export const filter_taskname_search=(data)=>{
   return{
    type:FILTER_TASKNAME_SEARCH,
    payload:data
   }
}

export const filter_taskduedate_search=(data)=>{
   return{
    type:FILTER_TASKDUEDATE_SEARCH,
    payload:data
   }
}

export const get_todo_detail=(data)=>{
   return{
    type:GET_TODO_DETAIL,
    payload:data
   }
}