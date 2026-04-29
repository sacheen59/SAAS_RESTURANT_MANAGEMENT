import { MenuItem as MenuItemType } from "@/data/menu-data";
import MenuItem from "./menu-item";

interface MenuListProps {
  items: MenuItemType[];
}

export default function MenuList({ items }: MenuListProps) {
  return (
    <div className="grid grid-cols-3 gap-6 overflow-auto">
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
}
