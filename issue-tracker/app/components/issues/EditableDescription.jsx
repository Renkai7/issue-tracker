const EditableDescription = ({
  description,
  isEditing,
  onClick,
  onChange,
  onBlur,
}) => {
  return isEditing ? (
    <textarea
      value={description}
      onChange={onChange}
      onBlur={onBlur}
      className="text-lg w-full"
      autoFocus
    />
  ) : (
    <p
      className="mt-4 text-lg hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {description}
    </p>
  );
};

export default EditableDescription;
