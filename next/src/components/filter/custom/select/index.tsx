"use client";

interface SelectOption {
  label: string;
  value: string;
}

function CustomSelect({
  options,
  label,
  name,
  defaultValue = "",
  onChange,
  disabled = false,
}: {
  options: SelectOption[];
  label?: string;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      onChange={onChange}
      // name={name}
      defaultValue={defaultValue}
      className=" p-2 rounded-lg border-2 border-gray-200 min-w-28 max-w-40 outline-none "
    >
      {label && (
        <option disabled={disabled} value="">
          {label}
        </option>
      )}
      {options.map((option, key) => (
        <option key={key} value={option.value} className="text-base">
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
