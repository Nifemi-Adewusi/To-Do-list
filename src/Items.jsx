import { useContext } from "react";
import SingleItem from "./SingleItem";
import { Functionality } from "./App";

const Items = () => {
  const { items } = useContext(Functionality);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item}></SingleItem>;
      })}
    </div>
  );
};
export default Items;
