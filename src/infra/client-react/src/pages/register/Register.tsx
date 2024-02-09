import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import RegisterHook from "./Register.hook";

export default function SignIn() {
  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    isPasswordMatch,
    handleConfirmPasswordChange,
  } = RegisterHook();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                autoFocus
                {...register("email")}
              />

              {errors.email && (
                <small style={{ color: "red" }}>{errors.email.message}</small>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    {...field}
                    onBlur={handleConfirmPasswordChange}
                  />
                )}
              />
              {errors.password && (
                <small style={{ color: "red" }}>
                  {errors.password.message}
                </small>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    {...field}
                    error={!isPasswordMatch}
                    helperText={
                      !isPasswordMatch
                        ? "Les mots de passe ne correspondent pas."
                        : ""
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name"
                {...register("name")}
              />
              {errors.name && (
                <small style={{ color: "red" }}>{errors.name.message}</small>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone"
                {...register("phone")}
              />
              {errors.phone && (
                <small style={{ color: "red" }}>{errors.phone.message}</small>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
