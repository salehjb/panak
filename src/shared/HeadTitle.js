import { Box, Container, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function HeadTitle({ title }) {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "80px",
        mb: 3,
        ...flexAlignCenter,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            fontWeight: "400",
            textAlign: { xs: "center", md: "right" },
          }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

export default HeadTitle;
