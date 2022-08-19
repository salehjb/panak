import { Box, Button, InputBase, Typography } from "@mui/material";
// components
import Input from "shared/Input";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function CommentForm() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
        p: 3,
        color: (theme) => theme.palette.primary.main
      }}
    >
      <Box sx={{ ...flexAlignCenter, width: "100%" }}>
        <Box sx={{ width: "100%", ml: 2 }}>
          <Typography mb={1} fontSize="15px" fontWeight="400">
            نام و نام خانوادگی
          </Typography>
          <InputBase sx={styles.input} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography mb={1} fontSize="15px" fontWeight="400">
            ایمیل
          </Typography>
          <InputBase sx={styles.input} />
        </Box>
      </Box>
      <Box>
        <Typography mb={1} fontSize="15px" fontWeight="400">
          دیدگاه خود را بنویسید
        </Typography>
        <InputBase sx={styles.textarea} multiline minRows={8} maxRows={8} />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            width: "130px",
            height: "48px",
            borderRadius: "8px",
            cursor: "pointer",
            color: "white",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            },
          }}
        >
          ثبت
        </Button>
      </Box>
    </Box>
  );
}

const styles = {
  input: {
    width: "100%",
    height: "48px",
    mb: 2,
    border: "1px solid #CFD8DC",
    borderRadius: "8px",
    pr: 1.5,
  },
  textarea: {
    width: "100%",
    mb: 2,
    border: "1px solid #CFD8DC",
    borderRadius: "8px",
    p: 1.5,
  },
};

export default CommentForm;
