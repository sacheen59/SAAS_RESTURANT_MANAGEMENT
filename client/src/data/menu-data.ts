export interface MenuCategory {
  id: string;
  name: string;
}

export interface MenuItem {
  id: string;
  name: string;
  imageUrl: string;
  isAvailable: boolean;
  tag: string;
  description: string;
  price: number;
  categories: string[];
}

export const MENUCATEGORY: Array<MenuCategory> = [
  {
    id: "c1",
    name: "Mo:Mo",
  },
  {
    id: "c2",
    name: "Curry",
  },
  {
    id: "c3",
    name: "Roti",
  },
  {
    id: "c4",
    name: "Veg",
  },
  {
    id: "c5",
    name: "Non-Veg",
  },
];

export const MENUITEM: Array<MenuItem> = [
  {
    id: "m1",
    name: "Steam MOMO",
    imageUrl:
      "https://i.pinimg.com/736x/84/2e/4a/842e4a9ad7cabe4ebcf5a7fd703f357e.jpg",
    isAvailable: true,
    tag: "🔥",
    description: "Steamed momos filled with juicy minced meat or vegetables.",
    price: 160,
    categories: ["c1", "c5"],
  },
  {
    id: "m2",
    name: "Fried MOMO",
    imageUrl:
      "https://i.pinimg.com/736x/dd/dd/25/dddd2549b888601e84649e7e27921fb2.jpg",
    isAvailable: false,
    tag: "🔥 Hot & Spicy",
    description: "Crispy fried dumplings served with spicy chutney.",
    price: 180,
    categories: ["c1", "c5"],
  },
  {
    id: "m3",
    name: "Veg MOMO",
    imageUrl:
      "https://i.pinimg.com/736x/7d/de/97/7dde97d17c5bce741f9235bfffb2dceb.jpg",
    isAvailable: true,
    tag: "Veg Special",
    description: "Healthy steamed momos stuffed with fresh vegetables.",
    price: 140,
    categories: ["c1", "c4"],
  },
  {
    id: "m4",
    name: "Chicken Curry",
    imageUrl:
      "https://i.pinimg.com/1200x/62/da/01/62da017533d9f7b2790ae28a5912de10.jpg",
    isAvailable: true,
    tag: "Customer Choice",
    description: "Spicy and flavorful chicken curry cooked in rich gravy.",
    price: 280,
    categories: ["c2", "c5"],
  },
  {
    id: "m5",
    name: "Paneer Butter Masala",
    imageUrl:
      "https://i.pinimg.com/736x/59/81/85/5981859da80c1d8580654daf371d0ffe.jpg",
    isAvailable: true,
    tag: "Veg Customer Choice",
    description: "Creamy paneer curry cooked in tomato butter gravy.",
    price: 260,
    categories: ["c2", "c4"],
  },
  {
    id: "m6",
    name: "Dal Tadka",
    imageUrl:
      "https://i.pinimg.com/1200x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg",
    isAvailable: true,
    tag: "🌱",
    description: "Yellow lentils tempered with spices and ghee.",
    price: 180,
    categories: ["c2", "c4"],
  },
  {
    id: "m7",
    name: "Plain Roti",
    imageUrl:
      "https://i.pinimg.com/736x/98/bd/8c/98bd8c39d7a14f58da960cc40f5ccf4c.jpg",
    isAvailable: true,
    tag: "",
    description: "Soft whole wheat flatbread.",
    price: 30,
    categories: ["c3", "c4"],
  },
  {
    id: "m8",
    name: "Butter Naan",
    imageUrl:
      "https://i.pinimg.com/1200x/fc/07/07/fc070786cd5b9b6912310dd9893162bb.jpg",
    isAvailable: true,
    tag: "🧈",
    description: "Soft naan brushed with butter.",
    price: 60,
    categories: ["c3", "c4"],
  },
  {
    id: "m9",
    name: "Chicken Roti Wrap",
    imageUrl:
      "https://i.pinimg.com/736x/60/7e/b2/607eb272e2c7806bb4803625d04ea607.jpg",
    isAvailable: true,
    tag: "🔥",
    description: "Roti wrap filled with spicy chicken and veggies.",
    price: 200,
    categories: ["c3", "c5"],
  },
  {
    id: "m10",
    name: "Veg Thali",
    imageUrl:
      "https://i.pinimg.com/1200x/56/ee/4e/56ee4ec107a39eac924b3c7903303814.jpg",
    isAvailable: true,
    tag: "🌱",
    description: "Complete meal with roti, rice, dal, and vegetables.",
    price: 250,
    categories: ["c4"],
  },
  {
    id: "m11",
    name: "Chicken Thali",
    imageUrl:
      "https://i.pinimg.com/736x/f2/60/21/f26021a61112c007a4f4bd956b58e6a7.jpg",
    isAvailable: true,
    tag: "🔥",
    description: "Full meal with chicken curry, rice, and roti.",
    price: 320,
    categories: ["c5"],
  },
  {
    id: "m12",
    name: "Egg Curry",
    imageUrl:
      "https://i.pinimg.com/1200x/98/8c/14/988c14d330598ec327e16424a37c36d3.jpg",
    isAvailable: true,
    tag: "🥚",
    description: "Boiled eggs cooked in spicy curry sauce.",
    price: 220,
    categories: ["c2", "c5"],
  },
];
