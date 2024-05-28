# React-Todo-List-App

## Introduction

This React-based Todo List application provides a user-friendly interface for managing a list of tasks. The application utilizes various React hooks to manage the state, optimize performance, and enhance the overall user experience.

## Key Features

1. *TodoProvider*:
   - This is a context provider that uses the useReducer hook to manage the state of todos.
   - It provides the todos state and a dispatch function to the rest of the application through the TodoContext.

2. *TodoList*:
   - This component is responsible for displaying the list of todos.
   - It consumes the TodoContext to access the list of todos and renders them using the TodoItem component.

3. *TodoItem*:
   - This component represents an individual todo item.
   - It utilizes the useCallback hook to define event handlers for toggling the completion status and removing the todo.

4. *TodoForm*:
   - This component allows the user to add new todos.
   - It uses the useRef hook to manage the input field reference and dispatches an action to the TodoProvider to add a new todo.

5. *TodoFilter*:
   - This component provides functionality to filter the todos based on their status (all, active, completed).
   - It uses the useCallback hook for the filter change event handlers and the useMemo hook in the TodoList component to memoize the filtered list of todos.

6. *Custom Hooks*:
   - useLocalStorage: This custom hook is used to persist the todos in the browser's local storage, ensuring that the todos are retained across page refreshes or app restarts.
   - useInputState: This custom hook is used to manage the state of input fields, providing a reusable way to handle input changes and validations.

## Installation

To run the Todo List application, follow the standard React project setup steps:

1. Clone the repository: git clone https://github.com/Mohaabdalle/React-Todo-List-App/upload
2. Navigate to the project directory: cd React-Todo-List-App
3. Install the dependencies: npm install
4. Start the development server: npm start
5. Open your browser and visit: http://localhost:5173/


## Usage

1. Add new todos by entering a task in the input field and pressing the "Add" button.
2. Toggle the completion status of a todo by clicking on the checkbox next to the todo.
3. Remove a todo by clicking on the "Delete" button next to the todo.
4. Filter the todos by clicking on the "All", "Active", or "Completed" buttons.

## Conclusion

This Todo List application showcases the effective use of React hooks to manage the application's state, optimize performance, and enhance the overall user experience. The clean and modular structure of the codebase makes it easy to extend or customize the application to suit specific project requirements.
