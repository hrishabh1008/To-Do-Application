import React, { useState, useRef } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState(props.todoList);
  const taskInputRef = useRef(null);

  function handleBtn() {
    if (inputText === "") {
      alert("Empty String: please enter a valid task");
    } else {
      const newItem = [...listItems, inputText];
      // console.log(newItem);
      localStorage.setItem("toDoList", JSON.stringify(newItem));
      setListItems(newItem);
      taskInputRef.current.value = "";
    }
  }

  function handleDeleteBtn(index) {
    const updatedList = listItems.filter((_, i) => i !== index);
    // console.log(updatedList);
    setListItems(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  }
  function handleEditBtn(index) {
    const updatedList = [...listItems];
    const currentTask = updatedList[index];
    const newTask = prompt("Edit your task:", currentTask);

    if (newTask !== null && newTask.trim() !== "") {
      updatedList[index] = newTask;
      setListItems(updatedList);
      localStorage.setItem("toDoList", JSON.stringify(updatedList));
    } else if (newTask === "") {
      alert("Task cannot be empty.");
    }
  }

  return (
    <>
      <div id="addTaskDiv" className="bg-amber-50 m-4 p-4 rounded-lg shadow-md">
        <input
          ref={taskInputRef}
          type="text"
          name="todo"
          id="todo"
          className="border-2 border-gray-300 mx-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
          placeholder="Enter a task"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setInputText(e.target.value);
              handleBtn();
            }
          }}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="border-2 border-blue-400 mx-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-lg hover:bg-blue-300 transition duration-200"
          onClick={handleBtn}>
          Add Task
        </button>
      </div>

      <div id="todoList" className="space-y-4 mt-4">
        {listItems.map((item, index) => (
          <ToDoItem
            key={`${index}${item}`}
            item={item}
            index={index}
            handleDelete={handleDeleteBtn}
            handleEdit={handleEditBtn}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
