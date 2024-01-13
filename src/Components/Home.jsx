import React, { useReducer, useState } from "react";
import { ToDoReducer } from "../Store/ReducerStore";

const Home = () => {
  const [item, setItem] = useState("");

  const [items, dispatchToDoReducer] = useReducer(ToDoReducer, []);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAdd = () => {
    const addItem = {
      type: "Add",
      payload: {
        item: item,
      },
    };
    dispatchToDoReducer(addItem);
    setItem("");
  };

  const handleDelete = (val) => {
    const deleteItem = {
      type: "Delete",
      payload: {
        item: val,
      },
    };
    dispatchToDoReducer(deleteItem);
  };

  return (
    <div className="Container">
      <div>To Do List</div>
      <div className="InputContainer">
        <input type="text" value={item} onChange={handleChange} />
        <button style={{ marginLeft: "5px" }} onClick={handleAdd}>
          Add
        </button>
      </div>
      <div style={{ marginTop: "15px" }}>
        {items.map((val, index) => {
          return (
            <div className="ItemContainer" key={index}>
              <div key={index}> {val} </div>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(val)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
