import { ToDo } from "../../data/types";
import useApi from "../../hooks/useApi";
import ItemStyled from "./ItemStyled";

interface ItemProps {
  todo: ToDo;
  position: number;
}

const Item = ({ todo, position }: ItemProps): JSX.Element => {
  const { toggleIsDone } = useApi();

  return (
    <ItemStyled className={`to-do ${position % 2 === 1 ? "odd" : "even"}`}>
      <span className="to-do__name">{todo.name}</span>
      <i className="to-do__is-done" onClick={() => toggleIsDone(todo)}>
        {todo.isDone ? "☑" : "🗹"}
      </i>
    </ItemStyled>
  );
};

export default Item;
