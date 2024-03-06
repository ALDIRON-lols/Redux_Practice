const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo"))
    ? JSON.parse(localStorage.getItem("todo"))
    : [],
};

const Slice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const data = {
        id: nanoid(),
        description: action.payload,
      };
      state.todos.push(data);
      const todosData = JSON.stringify(current(state.todos));
      localStorage.setItem("todo", todosData);
    },
    removeTodo: (state, action) => {
      const data = state.todos.filter((todo) => todo.id != action.payload);
      state.todos = data;
      const todosData = JSON.stringify(data);
      localStorage.setItem("todo", todosData);
    },
  },
});

export const { addTodos, removeTodo } = Slice.actions;
export default Slice.reducer;
