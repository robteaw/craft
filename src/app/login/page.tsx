"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, InferType } from "yup";
import * as yup from "yup";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Auth.module.scss";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);

  let registerationSchema = object({
    email: yup.string().required("email is required").email(),
    password: yup.string().required("password is required"),
  });

  type RegistrationData = InterType<typeof registerationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resetOptions: {
      keepDirtyValues: false,
      keepErrors: false,
    },
    resolver: yupResolver(registerationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    console.log(data);
    resize();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          action=""
        >
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
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
