import "./App.css";
import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ItemList />
      <Form />
    </div>
  );
};

export default App;
