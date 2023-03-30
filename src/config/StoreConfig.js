import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../reducers/BoardReducer";

const store = configureStore({
  reducer: { boardReducer: boardReducer },
});

export default store;