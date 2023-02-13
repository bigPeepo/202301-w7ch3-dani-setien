import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDos } from "../../../data/types";

export const initialState = [] as ToDos;

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [] as ToDos,
  reducers: {
    loadToDos: (state: ToDos, action: PayloadAction<ToDos>) =>
      (state = [...action.payload]),
  },
});

export default toDosSlice;

export const { loadToDos: loaToDosActionCreator } = toDosSlice.actions;
