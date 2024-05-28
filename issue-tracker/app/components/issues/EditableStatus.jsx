const EditableStatus = ({ status, isEditing, onClick, onChange, onBlur }) => {
  const statuses = ["OPEN", "IN PROGRESS", "CLOSED"];

  return isEditing ? (
    <select value={status} onChange={onChange} onBlur={onBlur} autoFocus>
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  ) : (
    <div
      className="badge badge-secondary badge-outline hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {status}
    </div>
  );
};

export default EditableStatus;
