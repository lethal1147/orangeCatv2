import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";

interface InputTextProps extends InputHTMLAttributes<Text> {
  label: string;
}

export default function InputText({
  label,
  required,
  placeholder,
  type = "text",
}: InputTextProps) {
  return (
    <div className="w-full text-gray-text">
      {label && (
        <label htmlFor={label}>
          {label}
          {required && <strong className=" text-main-red"> *</strong>}
        </label>
      )}
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded placeholder:text-gray-stroke focus:outline-0 focus:ring-0"
      />
    </div>
  );
}
