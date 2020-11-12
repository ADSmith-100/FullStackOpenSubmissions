import React from "react";

const AddForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <fieldset>
        <legend>Add Entry:</legend>
        <div>
          name:{" "}
          <input value={props.newName} onChange={props.handlePersonChange} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNum} onChange={props.handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddForm;
