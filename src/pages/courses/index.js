import { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
// components
import Grouping from "shared/Grouping";
import Courses from "components/courses-page/Courses";
import Layout from "components/layout/Layout";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function courses() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: "80px",
          mb: 5,
          ...flexAlignCenter,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{ color: "white", fontSize: "20px", fontWeight: "400" }}
          >
            دوره های آموزشی
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <InputBase
              fullWidth
              placeholder="عنوان مد نظر را جستجو کنید..."
              sx={{
                border: "1px solid #CFD8DC",
                borderRadius: "8px",
                backgroundColor: "white",
                height: "48px",
                pr: 2,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
            <Grouping />
          </Grid>
          <Grid item sm={12} md={9}>
            <Courses />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default courses;
