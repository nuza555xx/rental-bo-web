import { Checkbox as CoreCheckbox, CheckboxProps } from "@mui/material";

interface CheckboxCustomProps extends CheckboxProps {
  label: string;
}

export function Checkbox(props: CheckboxCustomProps) {
  return <CoreCheckbox {...props} />;
}
