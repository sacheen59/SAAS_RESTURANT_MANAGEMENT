import { BellIcon, HelpCircle, UserIcon } from "lucide-react";

export default function TenantHeader() {
  return (
    <header className="h-15 bg-white border-b border-[#ebebf5] flex items-center gap-4 px-6 sticky top-0 z-50 shrink-0">
      {/* Search bar */}
      <div className="flex items-center gap-2.5 flex-1 max-w-105 bg-[#f6f6fc] border border-[#ebebf5] rounded-[10px] px-3.5 h-9.5">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b0b0cc"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search Here...."
          className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#1e1e2e] placeholder-[#b0b0cc] font-medium"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Bell */}
        <button className="relative w-9 h-9 rounded-[9px] border border-[#ebebf5] bg-white flex items-center justify-center text-[#6b6b8a] hover:bg-[#f0ded2] hover:text-secondary hover:border-secondary transition-all duration-150 cursor-pointer">
          <BellIcon strokeWidth={1} />
          <span className="absolute top-1.75 right-2 w-1.75 h-1.75 rounded-full bg-red-500 border-2 border-white" />
        </button>

        {/* Help */}
        <button className="relative w-9 h-9 rounded-[9px] border border-[#ebebf5] bg-white flex items-center justify-center text-[#6b6b8a] hover:bg-[#f0ded2] hover:text-secondary hover:border-secondary transition-all duration-150 cursor-pointer">
          <HelpCircle strokeWidth={1} />
          <span className="absolute top-1.75 right-2 w-1.75 h-1.75 rounded-full bg-red-500 border-2 border-white" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-[#ebebf5] mx-1.5" />

        {/* Admin profile */}
        <button className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity border-none bg-transparent">
          <span className="text-[13px] font-semibold text-[#1e1e2e]">
            Admin Profile
          </span>
          <div className="w-8.5 h-8.5 rounded-full bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shrink-0">
            <UserIcon />
          </div>
        </button>
      </div>
    </header>
  );
}
