import { useCustomHookForContext } from "./App";

const SingleItem = ({ item }) => {
  const { removeItem, editItem } = useCustomHookForContext();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => editItem(item.id)}
      />

      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => {
          removeItem(item.id);
        }}
      >
        {item.name.length <= 6 ? `Remove ${item.name}` : "Remove Task"}
      </button>
    </div>
  );
};
export default SingleItem;
