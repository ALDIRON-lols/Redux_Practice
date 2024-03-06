const {configureStore} = require("@reduxjs/toolkit");
import usersReducer from "./slice"
import todosReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        userData: usersReducer,
        todosData: todosReducer
    }
})