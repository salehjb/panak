import { Grid, IconButton, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// icons
import { ProfileIcon, ClockIcon, AddProductIcon } from "shared/Icons";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function CourseBox({ title, teacher, time, price, image }) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        borderRadius: "24px",
        boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.07)",
      }}
    >
      <Grid item xs={12}>
        <img
          src={image}
          alt="course image"
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "24px",
            marginBottom: "0.5rem",
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ px: 2 }}>
        <Grid item xs={12} mb={2}>
          <Typography fontSize="18px" fontWeight="400">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2} sx={{ ...flexAlignCenter }}>
          <ProfileIcon />
          <Typography fontSize="15px" fontWeight="300" mr={1}>
            {teacher}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2} sx={{ ...flexAlignCenter }}>
          <ClockIcon />
          <Typography fontSize="15px" fontWeight="300" mr={1}>
            {timeFormatter(20, 30)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mb: 2,
            ...flexAlignCenter,
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize="18px" fontWeight="400">
            {priceFormatter(price)} تومان
          </Typography>
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
            }}  
          >
            <AddProductIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CourseBox;
