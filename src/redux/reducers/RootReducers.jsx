import { combineReducers } from "redux";
import UploadImageReducer from "./UploadImageReducer";

const RootReducer = combineReducers({
  UploadImageReducer,
});

export default RootReducer;
