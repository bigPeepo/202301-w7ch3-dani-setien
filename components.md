# DATA

## Data layer

- List of todos:
  - id
  - name
  - isDone

## Data modifications

- Load todos
- Toggle todos isDone
- Delete toDo
- Create toDo

# COMPONENTS

## App

- Show layout component

## Layout

- Show toDo list component

## ToDo list

- Recieves list of toDos
- Show a toDo card component for every toDo in the list of toDos
- Sends a toDo to each ToDo card component

## ToDoCard

- Recieves toggle toDo isDone action
- Recieves delete toDo action
- Recieves a toDo
- Show toDo name
- Show button component to toggle isDone
- Show button component to delete todo
- Sends "✅" to button component that shows isDone is true
- Sends "☑️" to button component that shows isDone is false
- Sends "🗑️" to button component that deletes the todo
- Sends toggle todo isDone action to button component that shows isDone
- Sends delete todo action to button component that delete todo

## Button

- Recieves an icon
- Recieves an action
- Show the recieved icon inside a button
- On click executes the recieved action
