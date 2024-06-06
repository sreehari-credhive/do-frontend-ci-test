import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  message?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, isError, message, label, ...props }, ref) => {
    return (
      <div>
        {label && <label className="text-sm font-normal">{label}</label>}
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ? ${
            isError ? "ring-2 ring-red-500" : ""
          }`}
          ref={ref}
          {...props}
        />
        {isError && (
          <span className="mt-2 mb-2 text-red-500 text-sm font-thin">
            {message || "This is a required field"}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
