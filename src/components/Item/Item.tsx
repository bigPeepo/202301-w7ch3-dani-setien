import { ToDo } from "../../data/types";

interface ItemProps {
  todo: ToDo;
}

const Item = ({ todo: { name, isDone } }: ItemProps): JSX.Element => {
  return (
    <>
      <li className="to-do">
        <span>{name}</span>
        <i>{isDone ? "🗹" : "☑"}</i>
      </li>
    </>
  );
};

export default Item;
