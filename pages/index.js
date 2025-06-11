import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    renderTodo(values);
    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    return generateTodo(item);
  },
  containerSelector: ".todos__list",
});
section.renderItems();

function generateTodo(item) {
  const todo = new Todo(item, "#todo-template", handleCheck, handleDelete);
  return todo.getView();
}

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();
