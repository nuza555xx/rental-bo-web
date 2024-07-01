import { Button, Input } from "@components";
import { Box, Link, Stack, Typography } from "@mui/material";
import { AuthWrapper } from "@layouts";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, forgotPasswordSchema } from "@types";

export const ForgotPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = (
    data: ForgotPasswordSchema
  ) => {
    console.log(data);
  };

  return (
    <AuthWrapper>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" display="block" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="subtitle1" display="block" gutterBottom>
          Please enter your email to reset your password
        </Typography>
      </Box>
      <Stack
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: { xs: "100%", sm: 400 } }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Button
          type="submit"
          label="Forgot password"
          size="large"
          variant="contained"
        />
        <Box sx={{ textAlign: "center" }}>
          <Link
            href="../authentications/sign-in"
            underline="none"
            color="primary"
          >
            <Typography variant="subtitle1" display="block" gutterBottom>
              Sign In
            </Typography>
          </Link>
        </Box>
      </Stack>
    </AuthWrapper>
  );
};
