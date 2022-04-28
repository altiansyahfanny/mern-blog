import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
import blogReducer from "./blogReducer";
import authReducer from "./authReducer";


const reducer = combineReducers({ homeReducer, globalReducer, blogReducer, authReducer })

export default reducer;