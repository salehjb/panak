import Image from "next/image";
// datas
import { TEAM_MEMBERS } from "datas";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PageLayout from "components/layout/PageLayout";
// mui => theme
import { dcFlex, flexEnd } from "mui/theme/commonStyles";
import Meta from "components/Meta";
import Description from "shared/Description";

function AboutUs() {
  return (
    <>
      <Meta title="پاناک | درباره ما" />
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                افزارها شناخت بیشتری را برای طراحان است.
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
                sx={{ fontWeight: "400", fontSize: { xs: "25px", md: "32px" } }}
              >
                تیم ما
              </Typography>
              <Typography fontSize="16px">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                mt: 5,
              }}
            >
              {TEAM_MEMBERS.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    ...dcFlex,
                    alignItems: "center",
                    mt: { xs: 3, md: 0 },
                    ml: { xs: 0, md: 8 },
                  }}
                >
                  <Avatar
                    src={item.image}
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
    </>
  );
}

export default AboutUs;
