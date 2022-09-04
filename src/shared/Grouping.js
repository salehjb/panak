// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function Grouping() {
  const array = new Array(2).fill(0);

  return (
    <Box>
      {array.map((_, index) => (
        <Accordion
          key={index}
          sx={{
            mt: 1,
            "&.MuiPaper-root": {
              borderRadius: "10px",
              "&::before": {
                content: "''",
                display: "none",
              },
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              color="primary"
              sx={{
                borderRight: (theme) =>
                  `3px solid ${theme.palette.secondary.main}`,
                pr: 2,
              }}
            >
              دسته بندی
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderBottom: "none", padding: "0" }}>
            {array.map((_, index) => (
              <Box key={index}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="عنوان اول"
                  />
                </FormGroup>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Grouping;
