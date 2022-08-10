import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";
// datas
import {
  CHANGE_PASSWORD_INPUTS_DASHBOARD,
  EDIT_PROFILE_INPUTS_DASHBOARD,
} from "datas";
import Input from "shared/Input";

function profile() {
  return (
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
              border: (theme) => `2px solid ${theme.palette.primary.main}`,
              cursor: "pointer",
            }}
          >
            <CameraAltOutlined
              sx={{
                color: (theme) => theme.palette.primary.main,
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
          <Box mt={5}>
            <Button
              variant="contained"
              sx={{
                width: "160px",
                height: "50px",
                backgroundColor: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.secondary.contrastText,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              ثبت تغییرات
            </Button>
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default profile;
