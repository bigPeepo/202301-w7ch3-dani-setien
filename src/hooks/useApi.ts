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

  const toggleIsDone = async (todo: ToDo) => {
    try {
      await fetch(`${apiUrl}/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          isDone: !todo.isDone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(toggleIsDoneActionCreator(todo));
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { loadToDos, toggleIsDone };
};

export default useApi;
