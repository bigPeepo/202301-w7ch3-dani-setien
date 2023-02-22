import { useOpenAI } from "../hooks/chat";
import { useAppSelector } from "../store/hooks";
import GenerateRecipeButtonStyled from "./GenerateRecipeButtonStyled";

const GenerateRecipeButton = (): JSX.Element => {
  const ingredients = useAppSelector((state) => state.toDos);

  const { getRecipe } = useOpenAI();

  const handleGenerateRecipe = async () => {
    await getRecipe(ingredients);
  };

  return (
    <GenerateRecipeButtonStyled>
      <button onClick={handleGenerateRecipe}>Generate Recipe 🍽️</button>
    </GenerateRecipeButtonStyled>
  );
};

export default GenerateRecipeButton;
