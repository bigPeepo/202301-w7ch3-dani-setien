import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient, Ingredients } from "../../types";

export const initialState = [] as Ingredients;

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [] as Ingredients,
  reducers: {
    loadToDos: (currentItems, action: PayloadAction<Ingredients>) =>
      (currentItems = [...action.payload]),

    removeToDo: (currentItems, action: PayloadAction<number>) =>
      currentItems
        .filter((item) => item.id !== action.payload)
        .map((item, position) => ({
          ...item,
          id: position,
        })),

    toggleIsDone: (currentItems, action: PayloadAction<Ingredient>) => {
      currentItems.map((item) =>
        item.id === action.payload.id
          ? (item.isPerishable = !item.isPerishable)
          : item.isPerishable
      );
    },

    addToDo: (currentItems, action: PayloadAction<Ingredient>) => [
      ...currentItems,
      action.payload,
    ],
  },
});

export default toDosSlice;

export const {
  loadToDos: loaToDosActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
  removeToDo: removeToDosActionCreator,
  addToDo: addToDoActionCreator,
} = toDosSlice.actions;
