import React, { useState } from "react";

function Todo({ todo }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Save the updated title and description
    setEditing(false);
  };

  return (
    <div className="Todo">
      {editing ? (
        <div>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
