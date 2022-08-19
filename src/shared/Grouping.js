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
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Grouping() {
  const array = new Array(5).fill(0);

  return (
    <Box my={5} sx={{ backgroundColor: "white", borderRadius: "16px" }}>
      {array.map((_, index) => (
        <Accordion
          key={index}
          sx={{
            mt: 1,
            "&.MuiPaper-root": {
              py: 0.5,
              borderBottom: index + 1 !== array.length && "1px solid #e0e0e0",
              mx: 1,
              "&::before": {
                content: "''",
                display: "none",
              },
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
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
                    sx={{ margin: "0" }}
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
