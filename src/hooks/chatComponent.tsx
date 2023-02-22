import { useState } from "react";
import { Ingredients } from "../store/types";
import { useOpenAI } from "./chat";

const RecipeGenerator = (): JSX.Element => {
  const [ingredients, setIngredients] = useState<Ingredients>([]);
  const { getRecipe } = useOpenAI();

  const handleGenerateRecipe = () => {
    getRecipe(ingredients);
  };

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value;
    const isPerishable = event.target.checked;
    const id = ingredients.length + 1;
    setIngredients((prevIngredients: Ingredients) => [
      ...prevIngredients,
      { id, name, isPerishable },
    ]);
  };

  return (
    <div>
      <h2>Recipe Generator</h2>
      <div>
        <label>Ingredients:</label>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} (
              {ingredient.isPerishable ? "perishable" : "non-perishable"})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>Add Ingredient:</label>
        <input type="text" onChange={handleIngredientChange} />
        <input type="checkbox" onChange={handleIngredientChange} />
      </div>
      <button onClick={handleGenerateRecipe}>Generate Recipe</button>
    </div>
  );
};

export default RecipeGenerator;
