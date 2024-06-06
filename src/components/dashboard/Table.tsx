import { useToggle } from "../../hooks/useToggle";
import { GenerateData } from "@app/utils/fakeData";
import { Edit, Flag } from "lucide-react";
import { EditModal } from "./EditData";
import { useState } from "react";
import { classnames } from "../../utils/classnames";

interface Props {
  handlePagination: (t: "NEXT" | "PREV") => void;
  data: GenerateData[];
  totalPage: number;
  currentPage: number;
  handleNewData: (id: string, data: Partial<GenerateData>) => void;
}

const defaultValue = {
  id: "",
  company: "",
  type: "",
  registrationId: "",
  location: "",
  owner: "",
};

export const Table = ({
  data,
  handlePagination,
  totalPage,
  currentPage,
  handleNewData,
}: Props) => {
  const [isModalOpen, handleModal] = useToggle(false);
  const [selected, setSelected] = useState<Array<string>>([]);

  const [modalData, setModalData] = useState<GenerateData>(defaultValue);

  const handleEdit = (info: GenerateData) => {
    setModalData(info);
    handleModal.on();
  };

  const handleClose = () => {
    handleModal.off();
    setModalData(defaultValue);
  };

  const handleSelect = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className=" border border-gray-300  flex justify-between flex-col h-[calc(100%-90px)] mt-4">
      <EditModal
        id={modalData.id}
        isOpen={isModalOpen}
        onToggle={handleClose}
        defaultValues={modalData}
        handleNewData={handleNewData}
      />
      <div>
        <div className="grid grid-cols-7 gap-4 bg-gray-100 p-2 font-normal text-gray-600 text-sm">
          <div></div>
          <div>Company</div>
          <div>Type</div>
          <div>Registration ID</div>
          <div>Location</div>
          <div>Owner</div>
          <div>Action</div>
        </div>

        {data.map((info) => (
          <div
            className="grid grid-cols-7 gap-4 bg-white p-2 border-b text-sm"
            key={info.id}
          >
            <Flag
              className={classnames(
                "cursor-pointer text-blue-500 hover:text-gray-600",
                {
                  "text-red-400": selected.includes(info.id),
                }
              )}
              onClick={() => handleSelect(info.id)}
            />
            <div className="truncate cursor-pointer text-blue-600 underline">
              {info.company}
            </div>
            <div className="truncate cursor-pointer">{info.type}</div>
            <div className="truncate cursor-pointer">{info.registrationId}</div>
            <div className="truncate cursor-pointer">{info.location}</div>
            <div className="truncate cursor-pointer">{info.owner}</div>
            <div
              className="truncate cursor-pointer"
              onClick={() => handleEdit(info)}
            >
              <Edit
                className="cursor-pointer text-blue-500 hover:text-gray-600"
                data-testid="edit-data-button"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex  justify-between  px-4 border pt-3">
        <span className="self-center text-gray-400">
          Page {currentPage} of {totalPage}
        </span>
        <div className="flex gap-x-4">
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1 mb-2"
            onClick={() => handlePagination("PREV")}
          >
            Prev
          </button>
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 "
            onClick={() => handlePagination("NEXT")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
