import { combineReducers } from "redux";
import evaluacionReducer from "./evaluacionReducer";

const rootReducer = combineReducers({
    evaluacion : evaluacionReducer
})

export default rootReducer;