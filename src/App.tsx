import { useEffect } from "react";
import "./App.css";
import useApi from "./hooks/useApi";

const App = (): JSX.Element => {
  const { loadToDos } = useApi();

  useEffect(() => {
    (async () => {
      await loadToDos();
    })();
  }, [loadToDos]);

  return <div className="App"></div>;
};

export default App;
