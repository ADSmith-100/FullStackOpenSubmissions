import React from "react";

const Filter = (props) => {
  return (
    <div>
      filter by name:{" "}
      <input value={props.searchName} onChange={props.handleSearchNameChange} />
    </div>
  );
};

export default Filter;
