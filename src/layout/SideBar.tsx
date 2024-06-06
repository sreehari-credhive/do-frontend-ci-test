import { sidebarIcons, bottomIcons } from "./constant";
import { classnames } from "../utils";

export const SideBar = () => {
  return (
    <nav className="w-20 min-h-screen p-10 flex-col justify-between fixed bg-blue-700 hidden md:flex">
      <div className="flex flex-col gap-4 h-[200px] justify-between items-center">
        {sidebarIcons.map((data) => (
          <data.icon
            key={data.name}
            className={classnames("text-white hover:cursor-pointer", {
              "text-slate-400": data.name === "Edit",
            })}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 h-[200px] justify-between items-center">
        {bottomIcons.map((data) => (
          <>
            <data.icon
              className={classnames("text-white hover:cursor-pointer", {
                "text-slate-400": data.name === "Edit",
              })}
            />
            {data.name === "Settings" && (
              <hr className="bg-gray-500 h-[0.5px] w-10" />
            )}
          </>
        ))}
      </div>
    </nav>
  );
};
