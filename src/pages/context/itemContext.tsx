import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "~/utils/api";

export const ItemsContext = createContext<object>({});

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<object>({});

  useEffect(() => {
    if (Object.keys(items).length >0){
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    const fetchItems = () => {
      const storedItems = JSON.parse(localStorage.getItem("items"))
      if (storedItems) setItems(storedItems);
    };
    fetchItems();
  }, []);

  const addItem = (key: string, value: object) => {
    setItems((prevItems) => ({
      ...prevItems,
      [key]: value,
    }));
  };

  const removeItem = (key: string) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[key];
      return updatedItems;
    });
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
