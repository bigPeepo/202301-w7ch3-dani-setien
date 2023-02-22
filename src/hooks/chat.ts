import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface Ingredient {
  id: number;
  name: string;
  isPerishable: boolean;
}

type Ingredients = Ingredient[];

interface Recipe {
  id: number;
  recipe: string;
  ingredients: Ingredients;
}

interface OpenAIError {
  message: string;
}

interface OpenAIState {
  isLoading: boolean;
  recipes: Recipe[];
  error: OpenAIError | null;
}

const initialState: OpenAIState = {
  isLoading: false,
  recipes: [],
  error: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchRecipesStart(state) {
      state.isLoading = true;
    },
    fetchRecipesSuccess(state, action: PayloadAction<Recipe[]>) {
      state.isLoading = false;
      state.recipes = action.payload;
      state.error = null;
    },
    fetchRecipesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = { message: action.payload };
    },
  },
});

export const { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure } =
  recipeSlice.actions;

export const useOpenAI = () => {
  const dispatch = useDispatch();

  const getRecipe = async (ingredients: Ingredients) => {
    dispatch(fetchRecipesStart());

    try {
      const requestBody = {
        model: "text-davinci-002",
        prompt: `Recipe using some of these ingredients: ${JSON.stringify(
          ingredients.map((ingredient) => ingredient.name)
        )}`,
        max_tokens: 100,
      };

      const response = await fetch(`https://api.openai.com/v1/completions`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();

      const recipeText = data.choices[0].text;

      const recipeIngredients = ingredients.filter((ingredient) =>
        recipeText.toLowerCase().includes(ingredient.name.toLowerCase())
      );

      const recipe: Recipe = {
        id: Math.random(),
        recipe: recipeText,
        ingredients: recipeIngredients,
      };

      dispatch(fetchRecipesSuccess([recipe]));
    } catch (error: any) {
      dispatch(fetchRecipesFailure(error.message));
    }
  };

  return { getRecipe };
};
