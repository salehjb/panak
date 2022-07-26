import { Box, Button, Grid, Typography } from "@mui/material";
// components
import Input from "shared/Input";

function ChargeWallet() {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          height: { xs: "auto", md: "400px" },
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        >
          شارژ کیف پول
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Input item={{ type: "text", label: "مبلغ ( تومان )" }} />
        </Box>
        <Box>
          <Button variant="contained" color="secondary" fullWidth>
            پرداخت
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default ChargeWallet;
