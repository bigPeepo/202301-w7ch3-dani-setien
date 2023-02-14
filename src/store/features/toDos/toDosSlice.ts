import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo, ToDos } from "../../../data/types";

export const initialState = [] as ToDos;

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [] as ToDos,
  reducers: {
    loadToDos: (state: ToDos, action: PayloadAction<ToDos>) =>
      (state = [...action.payload]),
    toggleIsDone: (state: ToDos, action: PayloadAction<ToDo>) => {
      state.map((item) =>
        item.id === action.payload.id
          ? (item.isDone = !item.isDone)
          : item.isDone
      );
    },
    deleteToDo: (state: ToDos, action: PayloadAction<number>) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export default toDosSlice;

export const {
  loadToDos: loaToDosActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
  deleteToDo: deleteToDoActionCreator,
} = toDosSlice.actions;
