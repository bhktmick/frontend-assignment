import React from "react";

function EditDrawer({ todo }) {
  return (
    <div className="edit-drawer">
      <h3>Edit Todo</h3>
      <input type="text" value={todo.title} />
      <textarea value={todo.description}></textarea>
      <button>Save</button>
    </div>
  );
}

export default EditDrawer;
