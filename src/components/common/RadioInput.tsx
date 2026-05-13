import { useId, type ComponentProps } from "react";

export function RadioInput ({
  label,
  ...props
}: Omit<ComponentProps<'input'>, 'type'> & {
  label: string;
}) {
  const id = `radio_${useId()}`;
  return (
    <div className="gap-1 flex items-center">
      <input type="radio" id={id} {...props} />
      <label htmlFor={props.id || id}>{label}</label>
    </div>
  );
}
