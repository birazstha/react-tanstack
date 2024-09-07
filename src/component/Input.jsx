import { ucFirst } from "../utils";

export default function Input({ name, type, value, onChange }) {
  console.log(name, type, value);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">{ucFirst(name)}</label>
      <input
        type={type ? type : "text"}
        name={name}
        defaultValue={value}
        onChange={onChange}
        className="bg-[#e8e8e8]  p-2 rounded-sm"
        placeholder={ucFirst(name)}
      />
    </div>
  );
}
