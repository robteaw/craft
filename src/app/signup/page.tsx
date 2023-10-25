"use client";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, InferType } from "yup";
import * as yup from "yup";
import styles from "../Login/Auth.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  let registrationSchema = object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required").email(),
    password: yup
      .string()
      .required("password is required")
      // .min(5, "password is too short - should be 5 characters minimum"),
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  type RegistrationData = InferType<typeof registrationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resetOptions: {
      keepDirtyValues: false,
      keepErrors: false,
    },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    console.log(data);
    reset();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((showPasswordConfirm) => !showPasswordConfirm);

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  label="name"
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="email"
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="password"
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  type={showPasswordConfirm ? "text" : "password"}
                  label="confirm password"
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle passwordConfirm visibility"
                          onClick={handleClickShowPasswordConfirm}
                          edge="end"
                        >
                          {showPasswordConfirm ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
            <div className={styles.newUser}>
              <p>Have account already?</p>
              <Link href="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
