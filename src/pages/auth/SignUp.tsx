import { Button, Input } from "@components";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { AuthWrapper } from "@layouts";
import { useState, MouseEvent, useEffect } from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { endpoints, httpRest } from "@app/constants";
import { SignUpSchema, signUpSchema } from "@types";

export const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setCfShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCfPassword = () => setCfShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<SignUpSchema> = async (data: SignUpSchema) => {
    if (controller) controller.abort(); // Cancel the previous request if it exists

    const newController = new AbortController();
    setController(newController);

    try {
      const response = await httpRest.post(
        endpoints.signUp,
        data,
        {},
        newController.signal
      );
      console.log("Login successful", response);
      // Handle successful login here
    } catch (error: any) {
      if (error.name === "CanceledError") {
        console.log("Request canceled");
      } else {
        console.error("Login failed", error);
      }
      // Handle login error here
    }
  };

  const [controller, setController] = useState<AbortController>();

  useEffect(() => {
    return () => {
      controller?.abort();
    };
  }, [controller]);

  return (
    <AuthWrapper>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" display="block" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="subtitle1" display="block" gutterBottom>
          Please input your credentials to sign up
        </Typography>
      </Box>
      <Stack
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: { xs: "100%", sm: 400 } }}
      >
        <Stack direction={{ sm: "row" }} spacing={2}>
          <Box>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Firstname"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Lastname"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Box>
        </Stack>

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
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Password"
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ marginRight: 0 }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ marginRight: 0 }}
                      onClick={handleClickShowCfPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showCfPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button
          type="submit"
          label="Sign Up"
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
