import { theme } from "@app/theme";
import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

interface InputCustomProps extends Omit<TextFieldProps<"outlined">, "variant"> {
  label: string;
}

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 10,
      transition: theme.transitions.create(["border-color", "box-shadow"], {
        duration: theme.transitions.duration.short,
      }),
    },
  },
});

export const Input = forwardRef<HTMLInputElement, InputCustomProps>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <InputLabel htmlFor={props.id} sx={{ fontSize: 14 }}>
          {label}
        </InputLabel>
        <CssTextField
          variant="outlined"
          fullWidth
          {...props}
          ref={ref}
          FormHelperTextProps={{
            sx: {
              marginLeft: 1,
            },
          }}
        />
      </>
    );
  }
);
