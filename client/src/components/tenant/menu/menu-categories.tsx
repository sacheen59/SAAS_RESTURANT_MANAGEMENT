"use client";
import { Card } from "@/components/ui/card";
import { MenuCategory } from "@/data/menu-data";
import { Plus, Save } from "lucide-react";
import CategoryMenu from "./menu-category";
import { useState } from "react";
import AddNewCategory from "./new-category";

interface props {
  categories: MenuCategory[];
  activeCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function MenuCategories({
  categories,
  activeCategoryId,
  onCategoryChange,
}: props) {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(true);
  };

  return (
    <Card className="rounded-md shadow px-6 self-start">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Categories</h1>
        <div
          onClick={openFormHandler}
          className="rounded-full cursor-pointer flex items-center justify-center text-white h-5 w-5 bg-secondary"
        >
          <Plus size={16} />
        </div>
      </div>
      <ul className="my-4">
        <CategoryMenu
          id="all"
          name="All"
          isActive={activeCategoryId === "all"}
          onClick={onCategoryChange}
        />
        {categories.map((item) => (
          <CategoryMenu
            key={item.id}
            id={item.id}
            name={item.name}
            isActive={item.id === activeCategoryId}
            onClick={onCategoryChange}
          />
        ))}
        {openForm && (
          <AddNewCategory setOpenForm={setOpenForm} />
        )}
      </ul>
    </Card>
  );
}
