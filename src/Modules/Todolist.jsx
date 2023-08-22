import React, { useState, useRef } from "react";

const TodoList = () => {
  const [data, setData] = useState([]);
  const inpVal = useRef(null);

  const ListSaver = () => {
    if (inpVal.current.value.length > 3) {
      setData([...data, { text: inpVal.current.value }]);
    }
    inpVal.current.value = "";
  };
  const Delete = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-gray-300 rounded shadow p-6 m-4 w-full lg:w-1/2 ">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                ref={inpVal}
              />
              <button
                onClick={ListSaver}
                className="enter flex-no-shrink p-2 text-white font-bold px-5 rounded bg-blue-500"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex mb-4 items-center bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p className="w-full text-grey-darkest">{item.text}</p>
                  <button className="flex-no-shrink p-2 border-2 rounded bg-blue-400 text-white ">
                    Done
                  </button>
                  <button
                    onClick={Delete}
                    className="flex-no-shrink p-2 border-2 rounded bg-red-600 text-white"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
