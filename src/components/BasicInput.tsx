import React, { useState, ChangeEvent } from "react";

interface BasicInputProps {
  label?: string;
  type?: string;
  onChange?: (value: string) => void;
}

function BasicInput({
  label = "label",
  type = "text",
  onChange = () => {},
}: BasicInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {/* label */}
      <div className="text-sm">{label}</div>

      {/* input */}
      <input
        type={type}
        onFocus={(e) => setIsFocus(true)}
        onBlur={(e) => setIsFocus(false)}
        onChange={handleChange}
        className={
          (isFocus ? "border-indigo-500" : "border-zinc-500") +
          " w-full h-full outline-none px-2 py-1 rounded-md" +
          " bg-zinc-100 dark:bg-zinc-700 border "
        }
      />
    </div>
  );
}

export default BasicInput;
