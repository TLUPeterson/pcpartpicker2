import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "~/utils/api";

export const ItemsContext = createContext<object>({});

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<object>({});

  useEffect(() => {
    const fetchItems = () => {
      console.log('test');
      
      const storedItems = localStorage.getItem("gpu");
      console.log(storedItems);

    };

    fetchItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(items));
  }, [items]);

  const addItem = (key: string, value: object) => {
    setItems((prevItems) => ({
      ...prevItems, 
      [key]: value
    }));
  };
  

  return (
    <ItemsContext.Provider value={{ items, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
