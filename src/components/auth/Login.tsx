import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const authSchema = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z.string({ message: "Description is required" }).min(6).max(14),
});

type FormValues = z.infer<typeof authSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(authSchema),
  });

  const navigate = useNavigate();

  const { setAuthState } = useAuth();

  const onSubmit = async (data: FormValues) => {
    setAuthState({
      password: data.password,
      name: data.email,
    });
    navigate("/");
  };

  return (
    <div className="sm:w-full sm:max-w-md">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <Input
              id="email"
              {...register("email")}
              isError={Boolean(errors.email)}
              message={errors.email?.message}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <div className="mt-2">
              <Input
                id="password"
                type="password"
                {...register("password")}
                isError={Boolean(errors.password)}
                message={errors.password?.message}
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
