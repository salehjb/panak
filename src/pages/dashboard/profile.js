import { Avatar, Box, Grid, Typography } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
import { ContainedButton } from "shared/Button";
import Meta from "components/Meta";
import Input from "shared/Input";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";
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
        <Grid container>
          <Grid item xs={12}>
            <Box>
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
            <Box
              sx={{
                position: "relative",
                mt: -3,
                zIndex: "10",
                backgroundColor: "white",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                ...flexCenter,
                border: "2px solid primary.main",
                cursor: "pointer",
              }}
            >
              <CameraAltOutlined
                sx={{
                  color: "primary.main",
                  fontSize: "1rem",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "400",
                mb: 4,
              }}
            >
              تغییر مشخصات
            </Typography>
            <Grid container flexDirection="row">
              {EDIT_PROFILE_INPUTS_DASHBOARD.map((item, index) => (
                <Grid item xs={3} key={index} ml={4}>
                  <Input item={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} mt={7}>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "400",
                mb: 4,
              }}
            >
              تغییر رمز عبور
            </Typography>
            <Grid container flexDirection="row">
              {CHANGE_PASSWORD_INPUTS_DASHBOARD.map((item, index) => (
                <Grid item xs={3} key={index} ml={4}>
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
      </DashboardLayout>
    </>
  );
}

export default profile;
