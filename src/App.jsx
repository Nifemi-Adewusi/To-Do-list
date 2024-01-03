import { nanoid } from "nanoid";
import Form from "./Form";
import { useState } from "react";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  const setLocalStorage = (taskName) => {
    localStorage.setItem("task", JSON.stringify(taskName));
  };
  // In case there's a key called task in the local storage, this is set as the default value, otherwise, an empty array is set as the default value
  const defaultValue = JSON.parse(localStorage.getItem("task") || "[]");
  const [items, setItems] = useState(defaultValue);
  const addItem = (item) => {
    const newItems = {
      name: item,
      id: nanoid(),
      completed: false,
    };
    // Desructuring the previous array of item objects and add the newly created object to the array of objects.
    const newItem = [...items, newItems];
    // Update the state value to the new object and newly added object.
    setItems(newItem);
    // Store to local storage
    setLocalStorage(newItem);
  };
  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success("Task Successfully Removed");
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center"></ToastContainer>
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </section>
  );
};
export default App;
