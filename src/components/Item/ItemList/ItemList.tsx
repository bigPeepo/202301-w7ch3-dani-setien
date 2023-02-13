import { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import { useAppSelector } from "../../../store/hooks";
import Item from "../Item";

const ItemList = (): JSX.Element => {
  const { loadToDos } = useApi();

  const list = useAppSelector((state) => {
    return state.toDos;
  });

  useEffect(() => {
    (async () => {
      await loadToDos();
    })();
  }, [loadToDos]);

  return (
    <ul className="to-do-list">
      {list.map((item) => (
        <Item todo={item} />
      ))}
    </ul>
  );
};

export default ItemList;
