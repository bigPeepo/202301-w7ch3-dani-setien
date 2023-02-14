import { ToDo } from "../../data/types";
import useApi from "../../hooks/useApi";
import ItemStyled from "./ItemStyled";

interface ItemProps {
  todo: ToDo;
  position: number;
}

const Item = ({ todo, position }: ItemProps): JSX.Element => {
  const { toggleIsDone, deleteToDos } = useApi();
  return (
    <ItemStyled className={`to-do ${position % 2 === 1 && "odd"}`}>
      <span className="to-do__name">{todo.name}</span>
      <button className="to-do__is-done" onClick={() => toggleIsDone(todo)}>
        {todo.isDone ? "✅" : "☑️"}
      </button>
      <button className="to-do__delete" onClick={() => deleteToDos(todo.id)}>
        🗑️
      </button>
    </ItemStyled>
  );
};

export default Item;
