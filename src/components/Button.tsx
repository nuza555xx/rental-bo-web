import { Button as CoreButton, ButtonProps, styled } from "@mui/material";
interface ButtonCustomProps extends ButtonProps {
  label: string;
}

const StyledButton = styled(CoreButton)({
  borderRadius: 10, // Example value for border radius
  textTransform: "none", // Ensures text remains as entered
  minHeight: 50
});

export function Button({ label, ...props }: ButtonCustomProps) {
  return (
    <StyledButton {...props} sx={{ textTransform: "none" }}>
      {label}
    </StyledButton>
  );
}
