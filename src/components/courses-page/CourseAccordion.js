import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// mui => theme
import {
  flexAlignCenter,
  flexBetweenCenter,
} from "mui/theme/commonStyles";

function CourseAccordion() {
  const episodeArray = new Array(10).fill(0);

  return (
    <Accordion
      sx={{
        mb: 1.5,
        "&.MuiPaper-root": {
          py: 0.5,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
          borderRadius: "16px",
          "&::before": {
            content: "''",
            display: "none",
          },
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ cursor: "pointer" }}>
        <Typography fontSize="17px">فصل اول</Typography>
      </AccordionSummary>
      {episodeArray.map((_, index) => (
        <AccordionDetails
          sx={{ ...flexBetweenCenter, py: 2, borderBottom: index + 1 !== episodeArray.length && "1px solid #e0e0e0" }}
          key={index}
        >
          <Box sx={{ ...flexAlignCenter }}>
            <Typography
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                fontSize: "14px",
                width: "20px",
                height: "20px",
                textAlign: "center",
                color: "white",
                borderRadius: "50%",
              }}
            >
              {index + 1}
            </Typography>
            <Typography
              sx={{ color: (theme) => theme.palette.secondary.main, mr: 1 }}
            >
              قسمت اول
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "primary.contrastText",
                fontSize: "15px",
              }}
            >
              00:06:05
            </Typography>
          </Box>
        </AccordionDetails>
      ))}
    </Accordion>
  );
}

export default CourseAccordion;
