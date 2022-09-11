import Link from "next/link";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from "graphql/queries";
import { useSession } from "next-auth/react";
import { getAllPurchases } from "redux/purchases/purchasesSlice";
import { Box, Grid, Typography, Link as MuiLink, Button } from "@mui/material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
import Description from "shared/Description";
import CourseBox from "components/dashboard-page/CourseBox";
import PurchasesBox from "components/dashboard-page/PurchasesBox";
import Meta from "components/Meta";
import Loading from "shared/Loading";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";
// utils
import { priceFormatter } from "utils/functions";

function index() {
  const { loading, data, errors } = useQuery(GET_COURSES);
  const purchases = useSelector(getAllPurchases);

  const { data: session, status } = useSession();

  console.log(data?.courses);

  return (
    <>
      <Meta title="داشبورد کاربری" disableAnother />
      {!loading ? (
        <DashboardLayout>
          <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            rowSpacing={{ xs: 3, md: 2 }}
          >
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "8px",
                  ...flexCenter,
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  p: 2,
                }}
              >
                <img
                  src="/vectors/dashboard-vector.svg"
                  alt="dashboard vector"
                />
                <Box sx={{ mr: { xs: 0, md: 3 }, mt: { xs: 4, md: 0 } }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      mb: 1,
                      color: "white",
                    }}
                  >
                    سلام {session?.user.name} عزیز!
                  </Typography>
                  <Description color="white" fontSize="14px">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                    مجله در ستون و سطرآنچنان لازم است
                  </Description>
                  <Link href="/dashboard/my-purchases">
                    <MuiLink>
                      <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="secondary">
                          دوره های من
                        </Button>
                      </Box>
                    </MuiLink>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  height: "220px",
                  borderRadius: "8px",
                  color: "white",
                  p: 2,
                  ...flexCenter,
                  flexDirection: "column",
                  backgroundImage:
                    "url(/vectors/circle3.svg), url(/vectors/circle4.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right top, right top",
                }}
              >
                <Typography fontSize="18px" mb={1}>
                  موجودی فعلی
                </Typography>
                <Typography fontSize="25px" fontWeight="400">
                  {priceFormatter(3459000)} تومان
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography fontSize="19px" fontWeight="400" mb={2}>
                  جدید ترین دوره ها
                </Typography>
                {data.courses.slice(0, 3).map((course) => (
                  <Box mb={1.5} key={course.id}>
                    <CourseBox course={course} />
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ width: "100%" }}>
                <Typography fontSize="19px" fontWeight="400" mb={2}>
                  جدید ترین خرید های من
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    p: 2,
                  }}
                >
                  {purchases.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ mb: index + 1 !== purchases.length && 1.5 }}
                    >
                      <PurchasesBox item={item} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DashboardLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default index;
