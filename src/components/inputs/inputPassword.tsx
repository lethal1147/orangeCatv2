import { IoEye, IoEyeOff } from "react-icons/io5";
import { InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface InputTextProps extends InputHTMLAttributes<Text> {
  label: string;
}

export default function InputPassword({
  label,
  required,
  placeholder,
}: InputTextProps) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="w-full text-gray-text">
      <label>
        {label}
        {required && <strong className=" text-main-red"> *</strong>}
      </label>
      <div className="relative">
        <input
          type={isShow ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          className={cn(
            "flex h-10 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-stroke placeholder:text-muted-foreground focus:outline-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-orange-500 disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />
        <button
          type="button"
          className=" absolute right-3 top-2 text-2xl outline-none"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? <IoEye className="" /> : <IoEyeOff />}
        </button>
      </div>
    </div>
  );
}
