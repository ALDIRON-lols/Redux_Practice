const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userApiData: [],
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

export const fetchApiUsers = createAsyncThunk("fetchApiUser", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const Slice = createSlice({
  name: "addUsersSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      const jsonUserData = JSON.stringify(current(state.users));
      localStorage.setItem("users", jsonUserData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => item.id != action.payload);
      state.users = data;
      const jsonUserData = JSON.stringify(data);
      localStorage.setItem("users", jsonUserData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
