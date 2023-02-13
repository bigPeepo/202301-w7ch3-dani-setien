import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import toDosSlice from "./features/toDos/toDosSlice";

export const store = configureStore({
  reducer: { toDos: toDosSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
