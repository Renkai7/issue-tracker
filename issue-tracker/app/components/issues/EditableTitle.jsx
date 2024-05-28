const EditableTitle = ({ title, isEditing, onClick, onChange, onBlur }) => {
  return isEditing ? (
    <input
      type="text"
      value={title}
      onChange={onChange}
      onBlur={onBlur}
      className="text-4xl font-bold w-full"
      autoFocus
    />
  ) : (
    <h2
      className="card-title text-4xl font-bold hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {title}
    </h2>
  );
};

export default EditableTitle;
