import { classnames } from "../../utils/classnames";

const tabData = ["Overview", "Management", "Shareholding", "Docs", "Versions"];

export const Tabs = () => {
  return (
    <>
      <nav className="w-full flex gap-20 justify-start mt-5 ml-2">
        {tabData.map((name, index) => (
          <span
            key={index}
            className={classnames("text-sm text-gray-600 font-semibold pb-2", {
              "border-b-2 border-blue-500": name === "Overview",
            })}
          >
            {name}
          </span>
        ))}
      </nav>
      <hr className="w-full border-gray-300 mt-0" />
    </>
  );
};
