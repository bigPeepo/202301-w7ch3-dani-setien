import { useEffect } from "react";
import "./App.css";
import Item from "./components/Item/Item";

import useApi from "./hooks/useApi";
import { useAppSelector } from "./store/hooks";

const App = (): JSX.Element => {
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
    <div className="App">
      <Item todo={list[0]} />
    </div>
  );
};

export default App;
