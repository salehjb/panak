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
import Meta from "components/Meta";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

const metaInfo = {
  title: "پاناک | دوره های آموزشی",
  description:
    "از مهمترین بخش های فعالیت مجموعه پاناک قسمت دوره های آموزشی است، پاناک برترین تکنولوژی های روز دنیا را با استفاده از مدرسین مجرب در قالب دوره های آموزشی مقدماتی تا پیشرفته پروژه محور به کاربران پارسی زبان ارائه میدهد",
  keywords: "دوره برنامه نویسی، دوره پروژه محور",
};

function courses() {
  return (
    <>
      <Meta
        title={metaInfo.title}
        description={metaInfo.description}
        keywords={metaInfo.keywords}
      />
      <Layout>
        <Box
          sx={{
            backgroundColor: "primary.main",
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
          <Grid container spacing={{ xs: 0, md: 3 }}>
            <Grid item xs={12} md={3}>
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
    </>
  );
}

export default courses;
