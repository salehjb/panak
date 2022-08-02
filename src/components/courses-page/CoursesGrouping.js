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
} from "@mui/material";
// icons
import { ArrowTop } from "shared/Icons";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function CoursesGrouping() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "24px",
        width: "100%",
        mt: 3,
        py: 1.5,
        boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.07)",
      }}
    >
      <Box>
        <Box
          sx={{
            ...flexAlignCenter,
            justifyContent: "space-between",
            pl: 1,
          }}
        >
          <Box sx={{ ...flexAlignCenter }}>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                width: "3px",
                height: "30px",
              }}
            />
            <Typography fontSize="17px" fontWeight="400" mr={1}>
              دسته بندی
            </Typography>
          </Box>
          <IconButton
            sx={{
              height: "40px",
              width: "40px",
            }}
          >
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
        <Divider variant="middle" sx={{ width: "90%" }} />
      </Box>
      <Box>
        <Box
          sx={{
            ...flexAlignCenter,
            justifyContent: "space-between",
            pl: 1,
          }}
        >
          <Box sx={{ ...flexAlignCenter }}>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                width: "3px",
                height: "30px",
              }}
            />
            <Typography fontSize="17px" fontWeight="400" mr={1}>
              عنوان آموزش
            </Typography>
          </Box>
          <IconButton
            sx={{
              height: "40px",
              width: "40px",
            }}
          >
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
        <Divider variant="middle" sx={{ width: "90%" }} />
      </Box>
      <Box
        sx={{
          padding: "0 1rem",
          ...flexAlignCenter,
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "48%",
            height: "50px",
            borderRadius: "8px",
            color: "white",
          }}
        >
          اعمال فیلتر
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "48%",
            height: "50px",
            borderRadius: "8px",
            color: "white",
            backgroundColor: "#A2AAC2",
            "&:hover": {
              backgroundColor: "#A2AAC2",
            },
          }}
        >
          پاکسازی فیلتر ها
        </Button>
      </Box>
    </Box>
  );
}

export default CoursesGrouping;
