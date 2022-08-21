import Link from "next/link";
import { Grid, Typography, Link as MuiLink } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
// components
import { ContainedButton } from "shared/Button";

function FavoriteCoursesEmpty() {
  return (
    <Grid container sx={{ ...flexAlignCenter, height: "80vh" }}>
      <Grid xs={12} sx={{ ...flexCenter, flexDirection: "column" }}>
        <img src="/vectors/heart.png" alt="heart" />
        <Typography fontSize="14px" color="primary.main" mt={2}>
          هنوز هیچ محصولی را به علاقه مندی ها اضافه نکردید
        </Typography>
        <Link href="/courses">
          <MuiLink>
            <ContainedButton width="130px" margin="1rem 0 0 0">دوره ها</ContainedButton>
          </MuiLink>
        </Link>
      </Grid>
    </Grid>
  );
}

export default FavoriteCoursesEmpty;
