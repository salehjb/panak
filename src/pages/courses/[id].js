import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getProductById } from "redux/products/productsSlice";
// components
import Navbar from "components/layout/Navbar";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function CourseSinglePage() {
  const router = useRouter();
  const { id } = router.query;

  const course = useSelector((state) => getProductById(state, Number(id)));

  return (
    <>
      <Navbar />
      <Box>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: "100%",
            height: "100px",
            ...flexAlignCenter,
          }}
        >
          <Container maxWidth="xl">
            <Typography fontSize="25px" sx={{ color: "white" }}>{course.title}</Typography>
          </Container>  
        </Box>
        <Container maxWidth="xl">
          <Grid contaienr>
            <Grid item xs={8}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
          </Grid>  
        </Container>
      </Box>
    </>
  );
}

export default CourseSinglePage;
