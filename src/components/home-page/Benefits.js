import { Box, Typography } from "@mui/material";
// datas
import { HOME_PAGE_BENEFITS } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";

function Benefits() {
  return (
    <Box mt={4.5} sx={{ display: "flex" }}>
      {HOME_PAGE_BENEFITS.map((benefit, index) => {
        const CustomIcon = benefit.icon;
        return (
          <Box
            key={index}
            ml={3}
            sx={{ ...flexAlignCenter, flexDirection: "column" }}
          >
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                width: "62px",
                height: "62px",
                ...flexCenter,
                borderRadius: "8px",
                color: "white",
                mb: 2,
              }}
            >
              <CustomIcon sx={{ fontSize: "1.8rem" }} />
            </Box>
            <Typography>{benefit.text}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Benefits;
