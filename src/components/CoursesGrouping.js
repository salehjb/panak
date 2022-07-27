// MUI
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowTop } from "../shared/Icons";

function CoursesGrouping() {
  // styles
  const theme = useTheme();
  const styles = {
    groupingContainer: {
      backgroundColor: "white",
      borderRadius: "24px",
      width: "100%",
      mt: 3,
      boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.07)",
      padding: "1rem 0",
    },
    dividerStyles: {
      backgroundColor: "#FF9B0C",
      width: "3px",
      height: "30px",
    },
    titleSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "0.5rem",
    },
    arrowIcon: {
      height: "40px",
      width: "40px",
    },
    middleDivider: {
      width: "90%",
    },
    buttonContainer: {
      padding: "0 1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      width: "48%",
      height: "50px",
      borderRadius: "8px",
      color: "white",
    },
    clearButton: {
      backgroundColor: "#A2AAC2",
      "&:hover": {
        backgroundColor: "#A2AAC2",
      },
    },
  };

  return (
    <Box sx={styles.groupingContainer}>
      <Box sx={styles.section}>
        <Box sx={styles.titleSection}>
          <Box display="flex" alignItems="center">
            <Divider orientation="vertical" sx={styles.dividerStyles} />
            <Typography fontSize="17px" fontWeight="400" mr={1}>
              دسته بندی
            </Typography>
          </Box>
          <IconButton sx={styles.arrowIcon}>
            <ArrowTop />
          </IconButton>
        </Box>
        <FormGroup>
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان اول"
          />
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان دوم"
          />
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان سوم"
          />
        </FormGroup>
      </Box>
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <Divider variant="middle" sx={styles.middleDivider} />
      </Box>
      <Box sx={styles.section}>
        <Box sx={styles.titleSection}>
          <Box display="flex" alignItems="center">
            <Divider orientation="vertical" sx={styles.dividerStyles} />
            <Typography fontSize="17px" fontWeight="400" mr={1}>
              عنوان آموزش
            </Typography>
          </Box>
          <IconButton sx={styles.arrowIcon}>
            <ArrowTop />
          </IconButton>
        </Box>
        <FormGroup>
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان اول"
          />
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان دوم"
          />
          <FormControlLabel
            sx={{ margin: "0" }}
            control={<Checkbox />}
            label="عنوان سوم"
          />
        </FormGroup>
      </Box>
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <Divider variant="middle" sx={styles.middleDivider} />
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button variant="contained" sx={{ ...styles.button }}>
          اعمال فیلتر
        </Button>
        <Button
          variant="contained"
          sx={{ ...styles.button, ...styles.clearButton }}
        >
          پاکسازی فیلتر ها
        </Button>
      </Box>
    </Box>
  );
}

export default CoursesGrouping;
