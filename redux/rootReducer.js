import { combineReducers } from "redux";
import TodosReducer from "./Todos/TodosReducer";

const rootReducer=combineReducers({
    Todos:TodosReducer
})

export default rootReducer;