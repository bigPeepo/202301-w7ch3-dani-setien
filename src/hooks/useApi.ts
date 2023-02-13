import { useCallback } from "react";
import { ToDo, ToDos } from "../data/types";
import {
  loaToDosActionCreator,
  toggleIsDoneActionCreator,
} from "../store/features/toDos/toDosSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const apiUrl =
    "https://202301-w6ch1-dani-setien-backend-second.onrender.com/todoes";
  const dispatch = useAppDispatch();

  const loadToDos = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);

      const toDosApi = (await response.json()) as ToDos;

      dispatch(loaToDosActionCreator(toDosApi));
    } catch (error) {}
  }, [apiUrl, dispatch]);

  const toggleIsDone = (todo: ToDo) => {
    dispatch(toggleIsDoneActionCreator(todo));
  };

  return { loadToDos, toggleIsDone };
};

export default useApi;
