import { Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexBetweenCenter } from "mui/theme/commonStyles";

function PurchasesBox({ item }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.07)",
        height: "70px",
        ...flexBetweenCenter,
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Typography>{item.title}</Typography>
      <Box sx={{ ...flexAlignCenter }}>
        <Typography ml={1}>{item.time}</Typography>
        <Typography>{item.date}</Typography>
      </Box>
    </Box>
  );
}

export default PurchasesBox;
