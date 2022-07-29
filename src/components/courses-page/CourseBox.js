// MUI
import { Box, Grid, IconButton, Typography } from "@mui/material";
// icons
import { ProfileIcon, ClockIcon, AddProductIcon } from "../../shared/Icons";
// utils
import { priceFormatter, timeFormatter, toPersianNumber } from "../../utils/functions";

function CourseBox({ title, teacher, time, price, image }) {
  // styles
  const styles = {
    courseContainer: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: "24px",
      boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.07)",
    },
    courseImage: {
      width: "100%",
      height: "250px",
      borderRadius: "24px",
      marginBottom: "0.5rem",
    },
    shopIcon: {
      width: "40px",
      height: "40px",
      backgroundColor: "#FF9B0C",
      "&:hover": {
        backgroundColor: "#e98d0d"
      }
    },
  };

  return (
    <Grid container sx={styles.courseContainer}>
      <Grid item xs={12}>
        <img src={image} alt="course image" style={styles.courseImage} />
      </Grid>
      <Grid item xs={12} sx={{ padding: "0 1rem" }}>
        <Grid item xs={12} mb={2}>
          <Typography fontSize="18px" fontWeight="400">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2} display="flex" alignItems="center">
          <ProfileIcon />
          <Typography fontSize="15px" fontWeight="300" mr={1}>
            {teacher}
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2} display="flex" alignItems="center">
          <ClockIcon />
          <Typography fontSize="15px" fontWeight="300" mr={1}>
            {timeFormatter(20, 30)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="18px" fontWeight="400">
            {priceFormatter(price)} تومان
          </Typography>
          <IconButton sx={styles.shopIcon}>
            <AddProductIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CourseBox;
