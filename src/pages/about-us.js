import { GET_TEACHERS } from "graphql/queries";
import { useQuery } from "@apollo/client";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PageLayout from "components/layout/PageLayout";
// mui => theme
import { dcFlex, flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
import Meta from "components/Meta";
import Description from "shared/Description";
// components
import Loading from "shared/Loading";

function AboutUs() {
  const { loading, data, errors } = useQuery(GET_TEACHERS);

  return (
    <>
      <Meta title="پاناک | درباره ما" />
      {!loading ? (
        <PageLayout title="درباره پاناک">
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
              }}
            >
              <Grid item xs={12} md={6} sx={{ mt: { xs: 3, md: 0 } }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "25px", md: "32px" },
                    mt: 3,
                    mb: 1,
                  }}
                >
                  پاناک
                </Typography>
                <Description>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان است. لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                  برای طراحان است.
                </Description>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "433px" },
                    height: { xs: "100%", md: "336px" },
                  }}
                >
                  <img
                    src="/vectors/team.png"
                    alt="team vector"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 15 }}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "25px", md: "32px" },
                  }}
                >
                  تیم ما
                </Typography>
                <Typography fontSize="16px">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <Box sx={{ ...flexCenter, flexWrap: "wrap" }}>
                {data.teachers.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      ...dcFlex,
                      alignItems: "center",
                      m: 3,
                    }}
                  >
                    <Avatar
                      src={item.image.url}
                      sx={{ width: "175px", height: "175px" }}
                    />
                    <Typography
                      fontWeight="400"
                      fontSize="24px"
                      sx={{ mt: "1rem" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography fontSize="18px">{item.stack}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default AboutUs;
