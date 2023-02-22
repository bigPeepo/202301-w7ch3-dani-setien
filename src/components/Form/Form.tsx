import { useState } from "react";
import useApi from "../../hooks/useApi";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { addIngredient } = useApi();

  const [formValue, setFormValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: formValue,
      isPerishable: false,
    };

    setFormValue("");
    addIngredient(event, newTask);
  };

  return (
    <FormStyled className="form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="to-do">New ingredient: </label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formValue}
        placeholder="ingredient"
        required
      ></input>
      <button type="submit" className="form__button">
        Add to pantry
      </button>
    </FormStyled>
  );
};

export default Form;
