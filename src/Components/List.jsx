import React, { useContext, useState, useEffect, useReducer } from "react";
import { ItemContext } from "../Store/ItemContext";

const List = () => {
  const data = useContext(ItemContext);
  const displayItems = data.StoreItems;
  const dispatch = data.dispatchToDoReducer;

  const handleDelete = (val) => {
    const deleteItem = {
      type: "Delete",
      payload: {
        item: val,
      },
    };
    dispatch(deleteItem);
  };

  return (
    <>
      {displayItems.map((val, index) => {
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
    </>
  );
};

export default List;
