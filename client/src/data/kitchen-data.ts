export interface OrderData{
    id: number;
    quantity: number;
    itemName: string;
    excludedIngredients?: string;
  }

export interface KitchenData {
  id: number;
  orderNumber: number;
  tableNumber: number;
  status: string;
  orderItems: Array<OrderData>;
}

export const KITCHENDATA: Array<KitchenData> = [
  {
    id: 1,
    orderNumber: 1024,
    tableNumber: 12,
    status: "pending",
    orderItems: [
      {
        id: 1,
        quantity: 2,
        itemName: "Fried Momo",
        excludedIngredients: "Onion, Chilly",
      },
      {
        id: 2,
        quantity: 1,
        itemName: "Buff Chowmein",
      },
    ],
  },
  {
    id: 2,
    orderNumber: 1025,
    tableNumber: 5,
    status: "preparing",
    orderItems: [
      {
        id: 1,
        quantity: 3,
        itemName: "Jhol Momo",
      },
      {
        id: 2,
        quantity: 2,
        itemName: "Chicken Sekuwa",
        excludedIngredients: "Less Spicy",
      },
    ],
  },
  {
    id: 3,
    orderNumber: 1026,
    tableNumber: 8,
    status: "ready",
    orderItems: [
      {
        id: 1,
        quantity: 1,
        itemName: "Veg Fried Rice",
      },
      {
        id: 2,
        quantity: 1,
        itemName: "Paneer Chilli",
      },
    ],
  },
  {
    id: 4,
    orderNumber: 1027,
    tableNumber: 3,
    status: "pending",
    orderItems: [
      {
        id: 1,
        quantity: 4,
        itemName: "Steam Momo",
      },
    ],
  },
  {
    id: 5,
    orderNumber: 1028,
    tableNumber: 10,
    status: "preparing",
    orderItems: [
      {
        id: 1,
        quantity: 2,
        itemName: "Thukpa",
        excludedIngredients: "Garlic",
      },
      {
        id: 2,
        quantity: 1,
        itemName: "Spring Rolls",
      },
    ],
  },
];
