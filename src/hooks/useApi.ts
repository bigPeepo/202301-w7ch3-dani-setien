import { useCallback } from "react";
import { ToDos } from "../data/types";
import { loaToDosActionCreator } from "../store/features/toDos/toDosSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_URL_API!;
  const dispatch = useAppDispatch();

  const loadToDos = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);

      const toDosApi = (await response.json()) as ToDos;

      dispatch(loaToDosActionCreator(toDosApi));
    } catch (error) {}
  }, [apiUrl, dispatch]);

  return { loadToDos };
};

export default useApi;
