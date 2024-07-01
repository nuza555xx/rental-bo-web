import { Button, Card, Input } from "@components";
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { AuthWrapper } from "@layouts";
import { useState, MouseEvent } from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "@types";

export const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<SignInSchema> = (data: SignInSchema) => {
    console.log(data);
  };

  return (
    <AuthWrapper>
      {/* <Card sx={{ paddingY: { xs: 0, sm: 10 }, paddingX: { xs: 0, sm: 7 } }}> */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" display="block" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Please input your credentials to sign in
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
          <Button
            type="submit"
            label="Sign In"
            size="large"
            variant="contained"
          />
          <Box sx={{ textAlign: "center" }}>
            <Link href="../authentications/forgot-password" underline="none" color="primary">
              <Typography variant="subtitle1" display="block" gutterBottom>
                Forgot password
              </Typography>
            </Link>
          </Box>
        </Stack>
      {/* </Card> */}
    </AuthWrapper>
  );
};
