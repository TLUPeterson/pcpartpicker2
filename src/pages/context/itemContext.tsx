import { createContext, useState, useEffect } from "react";

interface Item {
  itemName: string;
  store: string;
  price: number;
  link: string;
  image?: string;
}

interface Items {
  cpu?: Item;
  gpu?: Item;
  cpuCooler?: Item;
  motherboard?: Item;
  memory?: Item;
  storage?: Item;
  case?: Item;
  psu?: Item;
  monitor?: Item;
}


interface ItemsContextType {
  items: Items;
  addItem: (key: string, value: object) => void;
  removeItem: (key: string) => void;
}

export const ItemsContext = createContext<ItemsContextType>({
  items: {},
  addItem: () => null,
  removeItem: () => null,
});

//export const ItemsContext = createContext<object>({});

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
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
      const storedItems = localStorage.getItem("items");
      if (storedItems !== null) {
        const parsedItems = JSON.parse(storedItems) as object;
        if (parsedItems) {
          setItems(parsedItems);
        }
      }

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
      delete updatedItems[key as keyof typeof prevItems];
      return updatedItems;
    });
  };
  

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
