import { Ingredient } from "../../store/types";
import useApi from "../../hooks/useApi";
import ItemStyled from "./ItemStyled";

interface ItemProps {
  todo: Ingredient;
  position: number;
}

const Item = ({ todo, position }: ItemProps): JSX.Element => {
  const { deleteIngredient } = useApi();
  return (
    <ItemStyled className={`to-do ${position % 2 === 1 && "odd"}`}>
      <span className="to-do__name">{todo.name}</span>

      <button
        className="to-do__delete"
        onClick={() => deleteIngredient(todo.id)}
      >
        🗑️
      </button>
    </ItemStyled>
  );
};

export default Item;
