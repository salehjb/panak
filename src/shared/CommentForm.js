import { Box, Grid, InputBase, Typography } from "@mui/material";
// components
import Input from "shared/Input";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
import { ContainedButton } from "./Button";

function CommentForm() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={styles.label}>نام و نام خانوادگی</Typography>
          <InputBase sx={styles.input} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={styles.label}>ایمیل</Typography>
          <InputBase sx={styles.input} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.label}>دیدگاه خود را بنویسید</Typography>
          <InputBase sx={styles.textarea} multiline minRows={8} maxRows={8} />
        </Grid>
        <Grid item xs={12}>
          <ContainedButton width="130px">ثبت</ContainedButton>
        </Grid>
      </Grid>
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
  label: {
    color: "primary.main",
    fontSize: "16px",
    fontWeight: "400",
    mb: 1,
  },
};

export default CommentForm;
