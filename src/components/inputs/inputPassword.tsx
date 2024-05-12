import { IoEye, IoEyeOff } from "react-icons/io5";
import { forwardRef, useState } from "react";
import { Input, InputProps } from "../ui/input";

interface InputTextProps extends InputProps {
  error?: string | boolean;
  label?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputTextProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <Input
          {...props}
          className="w-full border-none shadow-none outline-none "
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          ref={ref}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2.5 top-2.5 text-gray-stroke focus:outline-none"
        >
          {showPassword ? <IoEye size={22} /> : <IoEyeOff size={22} />}
        </button>
      </div>
    );
  },
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
