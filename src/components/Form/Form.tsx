import { useState } from "react";
import useApi from "../../hooks/useApi";

const Form = (): JSX.Element => {
  const { addToDo } = useApi();

  const [formValue, setFormValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: formValue,
      isDone: false,
    };

    addToDo(event, newTask);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="to-do">New task: </label>
      <input type="text" id="name" onChange={handleChange} required></input>
      <button type="submit" className="form__button">
        add task
      </button>
    </form>
  );
};

export default Form;
