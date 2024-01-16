import { useContext } from "react";
import SingleItem from "./SingleItem";
import { useCustomHookForContext } from "./App";

const Items = () => {
  const { items } = useCustomHookForContext();
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item}></SingleItem>;
      })}
    </div>
  );
};
export default Items;
