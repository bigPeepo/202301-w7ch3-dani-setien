import "./App.css";
import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";
import GenerateRecipeButton from "./GenerateRecipeButton/GenerateRecipeButton";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ItemList />
      <Form />
      <GenerateRecipeButton />
    </div>
  );
};

export default App;
