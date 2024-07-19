import { ArrowRight } from "lucide-react";
import { Search } from "./Search";

export const Topbar = () => {
  return (
    <>
      <Search />
      <div className="flex gap-4 mt-3 text-xs">
        <span className="text-gray-400 self-center">All Entites</span>
        <span className="self-center text-xs">
          <ArrowRight className="text-xs w-2.5" />
        </span>
        <span className="text-blue-900 text-xs self-center">
          Jayaraj PVT LTD
        </span>
      </div>
    </>
  );
};
