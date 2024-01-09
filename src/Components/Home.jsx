import React, { useReducer, useState } from "react";
import { ItemContext } from "../Store/ItemContext";
import List from "./List";
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
        id: Date(),
      },
    };
    dispatchToDoReducer(addItem);
    setItem("");
  };

  return (
    <ItemContext.Provider
      value={{ StoreItems: items, dispatchToDoReducer: dispatchToDoReducer }}
    >
      <div className="Container">
        <div>To Do List</div>
        <div className="InputContainer">
          <input type="text" value={item} onChange={handleChange} />
          <button style={{ marginLeft: "5px" }} onClick={handleAdd}>
            Add
          </button>
        </div>
        <div style={{ marginTop: "15px" }}>
          <List></List>
        </div>
      </div>
    </ItemContext.Provider>
  );
};

export default Home;
