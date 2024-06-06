import { Search as SearchIcon } from "lucide-react";
import { forwardRef } from "react";

type SearchProps = React.ComponentPropsWithoutRef<"input">;

export const Search = forwardRef<HTMLInputElement, SearchProps>((_, ref) => {
  return (
    <>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative max-w-96">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-600" />
        </div>
        <input
          type="text"
          id="simple-search"
          ref={ref}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
          placeholder="Search"
          required
        />
      </div>
    </>
  );
});
