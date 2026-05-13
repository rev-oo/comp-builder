import type { ComponentProps } from "react";

export default function Select ({
  className,
  options,
  placeholder,
  ...props
}: ComponentProps<'select'> & {
  placeholder?: string,
  options: { label: string, value: string }[]
}) {
  return (
    <select className={`border rounded p-1 ${className}`} {...props}>
      <option value="">{placeholder}</option>
      {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
    </select>
  );
}
