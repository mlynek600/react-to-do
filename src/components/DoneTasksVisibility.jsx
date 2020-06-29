import React from "react";

const DoneTasksVisibility = ({ onVisibilityChange, isChecked }) => (
  <div className="bg-white text-dark text-center p-2">
    <input
      className="form-check-input"
      type="checkbox"
      onChange={event => onVisibilityChange(event.target.checked)}
      checked={isChecked}
    />
    <label className="form-check-label">Pokaż wykonane zadania</label>
  </div>
);

export default DoneTasksVisibility;
