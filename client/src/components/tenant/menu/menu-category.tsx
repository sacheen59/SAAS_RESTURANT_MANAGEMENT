"use client";

interface props {
  id: string;
  name: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export default function CategoryMenu({ id, name, isActive, onClick }: props) {
  return (
    <li
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-3 py-2 rounded mb-2 cursor-pointer ${
        isActive
          ? "bg-[#fff7f4] text-secondary"
          : "text-gray-400 hover:bg-[#fff7f4] hover:text-secondary"
      }`}
    >
      {/* <Utensils size={14} strokeWidth={3} /> */}
      <span className="font-bold">{name}</span>
    </li>
  );
}

// bg-[#fff7f4]
