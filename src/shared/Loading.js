import { Box, Typography } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        ...flexCenter,
        flexDirection: "column",
      }}
    >
      <RingLoader color={"#FF9B0C"} loading={true} size={100} />
      <Typography
        sx={{ mt: 4, fontSize: "20px", color: "primary.contrastText" }}
      >
        در حال پردازش اطلاعات ...
      </Typography>
    </Box>
  );
}

export default Loading;
