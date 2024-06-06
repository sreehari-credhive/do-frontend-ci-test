import { useCallback, useEffect, useMemo, useState } from "react";
import { SideBar } from "../layout/SideBar";
import { Table, Tabs, Topbar } from "../components/dashboard";
import { generateFakeData, GenerateData } from "../utils/fakeData";

const App = () => {
  const [data, setData] = useState<GenerateData[]>([]);
  const [offset, setOffset] = useState({
    start: 0,
    end: 12,
  });

  const totalPage = useMemo(() => Math.ceil(data.length / 12), [data]);

  const currentPage = useMemo(
    () => Math.floor(offset.start / 12) + 1,
    [offset.start]
  );

  const handleOffset = useCallback(
    (type: "PREV" | "NEXT") => {
      if (type === "NEXT") {
        if (offset.end >= data.length) return;
        setOffset(({ start, end }) => ({
          start: start + 12,
          end: end + 12,
        }));
      } else {
        if (offset.start === 0) return;
        setOffset(({ start, end }) => ({
          start: start - 12,
          end: end - 12,
        }));
      }
    },
    [data, offset, setOffset]
  );

  const handleNewData = (id: string, newData: Partial<GenerateData>) => {
    setData((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...newData } : el))
    );
  };

  useEffect(() => {
    const generatedData = generateFakeData(25);
    setData(generatedData);
  }, []);

  return (
    <div className="bg-blue-700 h-screen flex">
      <SideBar />
      <section className="bg-white w-full mt-3 rounded-md p-5  md:ml-20">
        <Topbar />
        <div className="mt-4 h-[85%]">
          <h1 className="text-3xl font-bold">Tesla India Corp.</h1>
          <Tabs />
          <Table
            data={data.slice(offset.start, offset.end)}
            handlePagination={handleOffset}
            totalPage={totalPage}
            currentPage={currentPage}
            handleNewData={handleNewData}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
