import {
  Card as CoreCard,
  CardProps,
  styled,
  CardContent,
} from "@mui/material";
interface CardCustomProps extends CardProps {}

const StyledCard = styled(CoreCard)({
  borderRadius: 10,
});

export function Card({ children, ...props }: CardCustomProps) {
  return (
    <StyledCard {...props}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
