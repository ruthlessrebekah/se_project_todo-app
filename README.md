# Simple Todo App

A dynamic, user-friendly todo list application that helps you keep track of your tasks. This project demonstrates the implementation of Object-Oriented Programming (OOP) principles in JavaScript, featuring a clean and intuitive interface for managing daily tasks.

## Functionality

This todo application allows users to:

- Create new todo items with custom text
- Mark todos as complete/incomplete with a checkbox
- Delete unwanted todo items
- Add new todos by pressing Enter or clicking the add button
- Each todo item has a unique identifier for reliable tracking
- View a live counter showing the number of completed and total tasks

## Technology

This project is built using:

- **Vanilla JavaScript** with ES6 Classes for OOP implementation
- **HTML5** and **CSS3** for structure and styling
- **BEM Methodology** for CSS organization
- **JavaScript Modules** for better code organization and maintainability
- **UUID Package** for generating unique identifiers

Key technical features:

- Custom `Todo` class for todo item management
- `Section` class for rendering and managing lists of todos
- `Popup` and `PopupWithForm` classes for modal management and form handling
- `TodoCounter` class for tracking and displaying completed/total tasks
- `FormValidator` class for form input validation
- Modular code structure with separate component files
- Event delegation for efficient event handling

## Deployment

This project is deployed on GitHub Pages:

## Live Demo

You can try out the Todo List application here: [Live Todo App](https://ruthlessrebekah.github.io/se_project_todo-app/)

## Recent Updates

### Feature & Bug Fixes (June 10, 2025)

- Implemented `Section` class for rendering and managing todo lists
- Added `Popup` and `PopupWithForm` classes for modal and form management
- Improved `TodoCounter` logic to accurately update completed and total counts, especially when deleting completed tasks
- Ensured all classes are in separate files and follow loose coupling principles
- Updated event handling to use class methods for popup and form actions
