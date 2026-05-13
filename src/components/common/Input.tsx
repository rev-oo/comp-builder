import type { ComponentProps } from 'react';

export default function Input ({label, className, ...props}: ComponentProps<'input'> & { label: string; }) {
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={props.id}>{label}</label>
      <input className={`border p-1 rounded ${className}`} {...props} />
    </div>
  );
}
