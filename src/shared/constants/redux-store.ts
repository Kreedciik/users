import { userReducer } from "@/views/main-list/store/user.reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(thunk));
