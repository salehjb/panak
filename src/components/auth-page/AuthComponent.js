import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// components
import AuthLayout from "./AuthLayout";
import { ContainedButton, OutlinedButton } from "shared/Button";
// mui => theme
import { flexJustifyCenter } from "mui/theme/commonStyles";
// utils
import { getURL } from "utils/functions";

function AuthComponent({ type, headerText, inputsArray, buttonText }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [form, setForm] = useState(
    type === "signup"
      ? {
          email: "",
          password: "",
          phoneNumber: "",
        }
      : {
          email: "",
          password: "",
        }
  );

  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <AuthLayout>
      <Grid container color="primary.contrastText">
        <Grid item xs={12} align="center">
          <Typography fontSize="24px" fontWeight="400" mb={3}>
            {headerText}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={(e) => submitHandler(e)}>
            <Grid container>
              {inputsArray.map((item, index) => (
                <Grid item xs={12} key={index} sx={{ ...flexJustifyCenter }}>
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
                      name={item.name}
                      value={form.name}
                      onChange={changeHandler}
                      endAdornment={
                        item.type === "password" && (
                          <InputAdornment position="end">
                            <IconButton
                              pr={1}
                              onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                              {isShowPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                    />
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} sx={{ ...flexJustifyCenter }}>
                <ContainedButton type="submit" width="318px">
                  {buttonText}
                </ContainedButton>
              </Grid>
            </Grid>
          </form>
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
                  <Link href="/auth/signup">
                    <MuiLink sx={{ color: "#566E7A" }}>ثبت نام</MuiLink>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/">
                    <MuiLink sx={{ color: "#566E7A" }}>
                      فراموشی رمز عبور
                    </MuiLink>
                  </Link>
                </Typography>
              </>
            ) : (
              <Typography>
                حساب دارید ؟{" "}
                <Link href="/auth/login">
                  <MuiLink sx={{ color: "#566E7A" }}>ورود</MuiLink>
                </Link>
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} mt={2} align="center">
          <Link href={`/api/auth/signin?callbackUrl=${getURL()}`}>
            <MuiLink>
              <OutlinedButton
                width="318px"
                color="primary.main"
                borderColor="primary.main"
                onClick={() => signIn()}
              >
                <Typography ml={1}>ورود با گوگل</Typography>
                <img src="/icons/google-icon.svg" alt="google icon" />
              </OutlinedButton>
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </AuthLayout>
  );
}

export default AuthComponent;
