import { Box, Typography } from "@mui/material";
// datas
import { HOME_PAGE_BENEFITS } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";

function Benefits() {
  return (
    <Box mt={3} sx={{ display: "flex" }}>
      {HOME_PAGE_BENEFITS.map((benefit, index) => {
        const CustomIcon = benefit.icon;
        return (
          <Box
            key={index}
            sx={{
              ...flexAlignCenter,
              flexDirection: "column",
              ml: index + 1 !== HOME_PAGE_BENEFITS.length ? 3 : 0,
            }}
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
            <Typography sx={{ textAlign: { xs: "center", md: "right" } }}>
              {benefit.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Benefits;
