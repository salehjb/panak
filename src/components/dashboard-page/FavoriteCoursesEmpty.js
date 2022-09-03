import Link from "next/link";
import { Grid, Typography, Link as MuiLink, Button } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";

function FavoriteCoursesEmpty() {
  return (
    <Grid container sx={{ ...flexAlignCenter, height: "80vh" }}>
      <Grid xs={12} sx={{ ...flexCenter, flexDirection: "column" }}>
        <img src="/vectors/heart.png" alt="heart" />
        <Typography fontSize="14px" color="primary.main" mt={2}>
          هنوز هیچ محصولی را به علاقه مندی ها اضافه نکردید
        </Typography>
        <Link href="/courses">
          <MuiLink sx={{ width: "138px" }}>
            <Button variant="contained" color="secondary" fullWidth>
              دوره ها
            </Button>
          </MuiLink>
        </Link>
      </Grid>
    </Grid>
  );
}

export default FavoriteCoursesEmpty;
