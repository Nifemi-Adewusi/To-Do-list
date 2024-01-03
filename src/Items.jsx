import SingleItem from "./SingleItem";

const Items = ({ items, editItem, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          ></SingleItem>
        );
      })}
    </div>
  );
};
export default Items;
