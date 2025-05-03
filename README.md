# React To-Do Application

This project is a simple To-Do application built using **React** and **Vite**. It allows users to add, edit, delete, and mark tasks as complete. The application uses **localStorage** to persist tasks across browser sessions and is styled using **Tailwind CSS**.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [File Structure](#file-structure)
3. [Application Flow](#application-flow)
4. [How to Run the Project](#how-to-run-the-project)
5. [Features](#features)
6. [Future Improvements](#future-improvements)

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ESLint**: A tool for identifying and fixing JavaScript code issues.
- **localStorage**: A browser API for storing data locally.

---

## File Structure

The project has the following structure:

```
react-todo-app/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Header component
│   │   ├── TaskList.jsx   # Component to display the list of tasks
│   │   ├── TaskItem.jsx   # Component for individual task items
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page-level components
│   │   └── Home.jsx       # Main page of the application
│   ├── App.jsx            # Root component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point for the React app
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

---

## Application Flow

1. **Initialization**: The application initializes by loading tasks from `localStorage` (if any exist).
2. **Adding Tasks**: Users can add a new task using the input field and "Add" button. The task is added to the state and saved in `localStorage`.
3. **Editing Tasks**: Users can edit a task by clicking the "Edit" button. The task text becomes editable, and changes are saved upon confirmation.
4. **Marking as Complete**: Users can mark tasks as complete by clicking the checkbox next to a task. Completed tasks are visually distinguished.
5. **Deleting Tasks**: Users can delete tasks by clicking the "Delete" button. The task is removed from the state and `localStorage`.
6. **Persisting Data**: All changes are automatically saved to `localStorage` to ensure data persists across browser sessions.

---

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/hrishabh1008/To-Do-Application.git
    cd react-todo-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the application in your browser at `http://localhost:5173`.

---

## Features

- Add new tasks with a title.
- Edit existing tasks.
- Mark tasks as complete or incomplete.
- Delete tasks.
- Persist tasks across sessions using `localStorage`.
- Responsive design using Tailwind CSS.

---

## Future Improvements

- Add due dates and reminders for tasks.
- Implement drag-and-drop functionality to reorder tasks.
- Add user authentication to sync tasks across devices.
- Improve accessibility for screen readers.

---

This README provides a comprehensive overview of the project, its structure, and its functionality. Feel free to contribute or suggest improvements!
