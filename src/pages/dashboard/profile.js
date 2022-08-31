import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
import { ContainedButton } from "shared/Button";
import Meta from "components/Meta";
import Input from "shared/Input";
// datas
import {
  CHANGE_PASSWORD_INPUTS_DASHBOARD,
  EDIT_PROFILE_INPUTS_DASHBOARD,
} from "datas";

function profile() {
  return (
    <>
      <Meta title="داشبورد | پروفایل کاربری" disableAnother />
      <DashboardLayout>
        <Box sx={{ backgroundColor: "white", borderRadius: "8px", p: 3 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "right" },
                }}
              >
                <Avatar
                  src="https://assets-prd.ignimgs.com/2021/11/30/cq5dam-web-1200-675-1638302563149.jpg"
                  sx={{
                    position: "relative",
                    width: "90px",
                    height: "90px",
                    zIndex: "1",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ mt: { xs: 6, md: 4 } }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "400",
                  mb: 4,
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                تغییر مشخصات
              </Typography>
              <Grid container flexDirection="row">
                {EDIT_PROFILE_INPUTS_DASHBOARD.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    md={3}
                    key={index}
                    sx={{ ml: { xs: 0, md: 4 } }}
                  >
                    <Input item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 7 }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "400",
                  mb: 4,
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                تغییر رمز عبور
              </Typography>
              <Grid container flexDirection="row">
                {CHANGE_PASSWORD_INPUTS_DASHBOARD.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    md={3}
                    key={index}
                    sx={{ ml: { xs: 0, md: 4 } }}
                  >
                    <Input item={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ContainedButton width="160px" margin="2rem 0 0 0">
                ثبت تغییرات
              </ContainedButton>
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </>
  );
}

export default profile;
