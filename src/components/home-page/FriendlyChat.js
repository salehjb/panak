import { Grid, Typography, Box, Container } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexEnd } from "mui/theme/commonStyles";
// components
import Description from "shared/Description";

function FriendlyChat() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 0, md: 3 }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ ...flexAlignCenter, color: "primary.main" }}
        >
          <Box>
            <Typography sx={{ fontSize: "25px", fontWeight: "400", mb: 1 }}>
              گپی دوستانه
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "90%" } }}>
              <Description sx={{ fontSize: "18px" }}>
                پاناک همواره در تلاش بوده تا رضایت کارفرمایان گرامی و همچنین
                دانشجو های خود را به بهترین شکل جلب نماید. در زمینه آموزش در
                فضایی که متاسفانه بحث رویا فروشی بسیار داغ است، مجموعه پاناک سعی
                داشته کاربران خود را با واقعیت های روز دنیای برنامه نویسی آشنا
                کند و از هر گونه اتلاف وقت و هزینه ی اضافی مخاطبین خود جلوگیری
                نماید. سعی داشته ایم تمام پستی و بلندی های دنیای برنامه نویسی را
                برای شما بازگو کنیم و در کنار هم به موفقیت های چشمگیری دست
                یابیم.
              </Description>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ mt: { xs: 3, md: 0 } }}>
          <Box sx={{ ...flexEnd }}>
            <video
              src="/bache-mamani.mp4"
              controls
              width="100%"
              controlsList="nodownload"
              poster="/images/mehdi-saleh-fateme-behind-their-own-laptop.JPG"
              style={{ borderRadius: "16px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FriendlyChat;
