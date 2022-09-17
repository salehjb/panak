import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  Link as MuiLink,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
// components
import AuthLayout from "./AuthLayout";
// mui => theme
import {
  flexAlignCenter,
  flexBetweenCenter,
  flexJustifyCenter,
} from "mui/theme/commonStyles";
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
      <Grid container color="primary.light">
        <Grid item xs={12} mb={5}>
          <Box sx={{ ...flexBetweenCenter }}>
            <Typography fontSize="24px" fontWeight="400">
              {headerText}
            </Typography>
            <Link href="/">
              <MuiLink sx={{ ...flexAlignCenter }}>
                <Typography sx={{ ml: 1 }}>صفحه اصلی</Typography>
                <ArrowBack />
              </MuiLink>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={(e) => submitHandler(e)}>
            <Grid container>
              {inputsArray.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box>
                    <Typography mb={0.8} fontWeight="400">
                      {item.label}
                    </Typography>
                    <InputBase
                      sx={{
                        width: "100%",
                        height: "48px",
                        mb: 2.5,
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
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  fullWidth
                >
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} align="center">
          <Box
            mt={2}
            sx={{
              ...flexBetweenCenter,
            }}
          >
            {type === "login" ? (
              <>
                <Typography>
                  حسابی ندارید ؟{" "}
                  <Link href="/signup">
                    <MuiLink sx={{ color: "primary.light" }}>ثبت نام</MuiLink>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/">
                    <MuiLink sx={{ color: "primary.light" }}>
                      فراموشی رمز عبور
                    </MuiLink>
                  </Link>
                </Typography>
              </>
            ) : (
              <Typography>
                حساب دارید ؟{" "}
                <Link href="/login">
                  <MuiLink sx={{ color: "primary.light" }}>ورود</MuiLink>
                </Link>
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} mt={2} align="center">
          <Link href={`/api/auth/signin`}>
            <MuiLink>
              <Button variant="outlined" color="primary" fullWidth>
                <Typography ml={1}>ورود با گوگل</Typography>
                <img src="/icons/google-icon.svg" alt="google icon" />
              </Button>
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </AuthLayout>
  );
}

export default AuthComponent;
