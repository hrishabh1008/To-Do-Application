import React, { useRef } from 'react';

const ToDoItem = (props) => {
  const isCompleteRef = useRef(null);

  function handleCheckbox(e) {
    if (e.target.checked) {
      isCompleteRef.current.className = ` text-lg font-medium transition-all duration-200 text-gray-400 line-through`;
    } else {
      isCompleteRef.current.className = `text-gray-800 text-lg font-medium transition-all duration-200 text-gray-800`;
    }
  }

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:transition-shadow duration-200 transition-all ">
      <input
        type="checkbox"
        onClick={handleCheckbox}
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <p
        ref={isCompleteRef}
        className="text-gray-800 text-lg font-medium transition-all duration-200"
      >
        {props.item}
      </p>
      <div className="space-x-2">
        <button className="px-3 py-1 bg-yellow-200 text-yellow-700 rounded-lg hover:bg-yellow-300 hover:text-yellow-800 transition duration-200">
          Edit
        </button>
        <button className="px-3 py-1 bg-red-200 text-red-700 rounded-lg hover:bg-red-300 hover:text-red-800 transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;