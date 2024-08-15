interface SearchBarProps {
  handleCancel?: () => void;
}

function SearchBarComponent({ handleCancel }: SearchBarProps) {
  return (
    <div>
      <div>
        <input />
      </div>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
}

export default SearchBarComponent;
