import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Item from "../Item/Item";

const ItemList = (): JSX.Element => {
  const { getIngredients } = useApi();

  const list = useAppSelector((state) => state.toDos);

  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <>
      <h1>Pantry</h1>
      <ul className="to-do-list">
        {list.map((item, position) => (
          <Item
            todo={item}
            position={position}
            key={Math.floor(Math.random() * 999999)}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
