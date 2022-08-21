import { Grid, Typography } from "@mui/material";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function FavoriteCoursesEmpty() {
  return (
    <Grid container>
      <Grid xs={12} sx={{ ...flexCenter, flexDirection: "column" }}>
        <img src="/vectors/heart.png" alt="heart" />
        <Typography fontSize="14px" color="primary.main" mt={2}>
          هنوز هیچ محصولی را به علاقه مندی ها اضافه نکردید
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FavoriteCoursesEmpty;
