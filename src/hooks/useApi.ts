import { useCallback } from "react";
import { Ingredient, Ingredients } from "../store/types";
import {
  addToDoActionCreator,
  loaToDosActionCreator,
  removeToDosActionCreator,
  toggleIsDoneActionCreator,
} from "../store/features/toDos/toDosSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const apiUrl =
    "https://202301-w6ch1-dani-setien-backend-second.onrender.com/todoes";
  const dispatch = useAppDispatch();

  const getIngredients = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);

      const toDosApi = (await response.json()) as Ingredients;

      dispatch(loaToDosActionCreator(toDosApi));
    } catch (error) {}
  }, [apiUrl, dispatch]);

  const toggleIsPerishable = async (todo: Ingredient) => {
    try {
      await fetch(`${apiUrl}/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          isDone: !todo.isPerishable,
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

  const deleteIngredient = useCallback(
    async (id: number) => {
      try {
        await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
        });

        dispatch(removeToDosActionCreator(id));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [apiUrl, dispatch]
  );

  const addIngredient = async (event: any, todo: Ingredient) => {
    event.preventDefault();

    try {
      await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          name: todo.name,
          isDone: todo.isPerishable,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      return (error as Error).message;
    }

    dispatch(addToDoActionCreator(todo));
  };

  return {
    getIngredients,
    toggleIsPerishable,
    deleteIngredient,
    addIngredient,
  };
};

export default useApi;
