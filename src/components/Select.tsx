import {
  InputLabel,
  MenuItem,
  Select as CoreSelect,
  SelectProps,
} from "@mui/material";

type SelectCustomProps<T> = SelectProps<T> & {
  label: string;
  options: Record<string, string>[];
};

export function Select<T>({ label, options, ...props }: SelectCustomProps<T>) {
  return (
    <>
      <InputLabel id={props.id}>{label}</InputLabel>
      <CoreSelect {...props}>
        {options.map(({ label, value }) => (
          <>
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          </>
        ))}
      </CoreSelect>
    </>
  );
}
