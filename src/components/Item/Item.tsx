import { ToDo } from "../../data/types";
import ItemStyled from "./ItemStyled";

interface ItemProps {
  todo: ToDo;
}

const Item = ({ todo: { name, isDone } }: ItemProps): JSX.Element => {
  return (
    <ItemStyled className="to-do">
      <span className="to-do__name">{name}</span>
      <i className="to-do__is-done">{isDone ? "☑" : "🗹"}</i>
    </ItemStyled>
  );
};

export default Item;
