import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo, ToDos } from "../../../data/types";

export const initialState = [] as ToDos;

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [] as ToDos,
  reducers: {
    loadToDos: (currentItems, action: PayloadAction<ToDos>) =>
      (currentItems = [...action.payload]),
    removeToDo: (currentItems, action: PayloadAction<number>) =>
      currentItems.filter((item) => item.id !== action.payload),
    toggleIsDone: (currentItems, action: PayloadAction<ToDo>) => {
      currentItems.map((item) =>
        item.id === action.payload.id
          ? (item.isDone = !item.isDone)
          : item.isDone
      );
    },
  },
});

export default toDosSlice;

export const {
  loadToDos: loaToDosActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
  removeToDo: removeToDosActionCreator,
} = toDosSlice.actions;
