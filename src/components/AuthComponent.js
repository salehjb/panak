import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// components
import AuthLayout from "./layout/AuthLayout";
// icons
import { GoogleIcon } from "shared/Icons";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function AuthComponent({ type, headerText, inputsArray, buttonText }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  return (
    <AuthLayout>
      <Grid container color="primary.contrastText">
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
                sx={{
                  width: "318px",
                  height: "48px",
                  mb: 2,
                  border: "1px solid #CFD8DC",
                  borderRadius: "8px",
                  pr: 1.5,
                }}
                type={isShowPassword ? "text" : item.type}
                inputRef={item.email && emailInput}
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
          <Button
            variant="contained"
            sx={{
              width: "318px",
              height: "48px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              mt: 2,
              color: (theme) => theme.palette.secondary.contrastText,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
            }}
          >
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
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
                    <MuiLink sx={{ color: "#566E7A" }}>ثبت نام</MuiLink>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/">
                    <MuiLink sx={{ color: "#566E7A" }}>فراموشی رمز عبور</MuiLink>
                  </Link>
                </Typography>
              </>
            ) : (
              <Typography>
                حساب دارید ؟{" "}
                <Link href="/login">
                  <MuiLink sx={{ color: "#566E7A" }}>ورود</MuiLink>
                </Link>
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} mt={2} align="center">
          <Button
            variant="outlined"
            sx={{
              width: "318px",
              height: "48px",
              ...flexAlignCenter,
            }}
          >
            <Typography ml={1}>ورود با گوگل</Typography>
            <GoogleIcon />
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
}

export default AuthComponent;
