import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../Input";
import { GenerateData } from "@app/utils/fakeData";
import { useEffect } from "react";

const schema = z.object({
  company: z.string().min(1, "Company name is required"),
  type: z.string().min(1, "Type is required"),
  registrationId: z.string().min(1, "Registration Id is required"),
  location: z.string().min(1, "Location is required"),
  owner: z.string().min(1, "owner is required"),
});

type RowInfo = z.infer<typeof schema>;

interface Modal {
  defaultValues: GenerateData;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  handleNewData: (id: string, data: Partial<GenerateData>) => void;
}

export const EditModal = ({
  defaultValues,
  isOpen,
  onToggle,
  handleNewData,
  id,
}: Modal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      company: defaultValues.company || "",
      type: defaultValues.type || "",
      registrationId: defaultValues.registrationId || "",
      location: defaultValues.location || "",
      owner: defaultValues.owner || "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset(defaultValues);
    }
  }, [isOpen, defaultValues, reset]);

  const onSubmit = (data: RowInfo) => {
    handleNewData(id, data);
    onToggle();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onToggle}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Edit data
          </Dialog.Title>
          <Dialog.Description
            className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"
            data-testid="edit-data-modal"
          >
            Make changes to the list here. Click save when done.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[15px] flex gap-5 flex-col w-full">
              <Input
                id="Company"
                placeholder="Company"
                {...register("company")}
                isError={Boolean(errors.company)}
                message={errors.company?.message}
                defaultValue={defaultValues.company}
                label="Company name"
              />
            </div>
            <div className="mb-[15px] flex gap-5 flex-col w-full">
              <Input
                id="type"
                placeholder="Type"
                {...register("type")}
                isError={Boolean(errors.type)}
                message={errors.type?.message}
                defaultValue={defaultValues.type}
                label="Type"
              />
            </div>
            <div className="mb-[15px] flex gap-5 flex-col w-full">
              <Input
                id="registrationId"
                placeholder="registrationId"
                {...register("registrationId")}
                isError={Boolean(errors.registrationId)}
                message={errors.registrationId?.message}
                defaultValue={defaultValues.registrationId}
                label="registrationId"
              />
            </div>
            <div className="mb-[15px] flex gap-5 flex-col w-full">
              <Input
                id="location"
                placeholder="Location"
                {...register("location")}
                isError={Boolean(errors.location)}
                message={errors.location?.message}
                defaultValue={defaultValues.location}
                label="Location"
              />
            </div>
            <div className="mb-[15px] flex gap-5 flex-col w-full">
              <Input
                id="owner"
                placeholder="owner name"
                {...register("owner")}
                isError={Boolean(errors.owner)}
                message={errors.owner?.message}
                defaultValue={defaultValues.owner}
                label="Owner"
              />
            </div>
            <div className="mt-[25px] flex justify-end gap-2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-black bg-white border border-shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                onClick={onToggle}
              >
                Cancel
              </button>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
