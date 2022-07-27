import { useState } from "react";
import Link from "next/link";
// components
import AuthLayout from "./layout/AuthLayout";
// MUI
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// icons
import { GoogleIcon } from "../shared/Icons";

function AuthComponent({ type, headerText, inputsArray, buttonText }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  // styles
  const theme = useTheme();
  const styles = {
    input: {
      width: "318px",
      height: "48px",
      mb: 2,
      border: "1px solid #CFD8DC",
      borderRadius: "8px",
      paddingRight: "0.9rem",
    },
    signupButton: {
      width: "318px",
      height: "48px",
      backgroundColor: "#FF9B0C",
      mt: 2,
      color: "white",
      "&:hover": {
        backgroundColor: "#e98d0d",
      },
    },
    signupGoogle: {
      width: "318px",
      height: "48px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <AuthLayout>
      <Grid container color="#455A64">
        <Grid item xs={12} align="center">
          <Typography fontSize="24px" fontWeight="400" mb={3}>
            {headerText}
          </Typography>
        </Grid>
        {inputsArray.map((item, index) => (
          <Grid item xs={12} display="flex" justifyContent="center" key={index}>
            <Box>
              <Typography mb={0.8} fontWeight="400">
                {item.label}
              </Typography>
              <InputBase
                sx={styles.input}
                type={isShowPassword ? "text" : item.type}
                endAdornment={
                  item.type === "password" && (
                    <InputAdornment position="end">
                      <IconButton
                        pr={1}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        {isShowPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              />
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} align="center">
          <Button variant="contained" sx={styles.signupButton}>
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={12} color="#566E7A" align="center">
          <Box
            width="318px"
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {type === "login" ? (
              <>
                <Typography>
                  حسابی ندارید ؟{" "}
                  <Link href="/signup">
                    <a style={{ color: "#566E7A" }}>ثبت نام</a>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/">
                    <a style={{ color: "#566E7A" }}>فراموشی رمز عبور</a>
                  </Link>
                </Typography>
              </>
            ) : (
              <Typography>
                حساب دارید ؟{" "}
                <Link href="/login">
                  <a style={{ color: "#566E7A" }}>ورود</a>
                </Link>
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} mt={2} align="center">
          <Button variant="outlined" sx={styles.signupGoogle}>
            <Typography ml={1}>ورود با گوگل</Typography>
            <GoogleIcon />
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
}

export default AuthComponent;