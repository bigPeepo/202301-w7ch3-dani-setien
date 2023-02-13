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
    <>
      <h1>To do list</h1>
      <ul className="to-do-list">
        {list.map((item, position) => (
          <Item todo={item} position={position} />
        ))}
      </ul>
    </>
  );
};

export default ItemList;