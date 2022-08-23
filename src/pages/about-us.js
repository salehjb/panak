import Image from "next/image";
// datas
import { TEAM_MEMBERS } from "datas";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PageLayout from "components/layout/PageLayout";
// mui => theme
import { flexEnd } from "mui/theme/commonStyles";
import Meta from "components/Meta";

function AboutUs() {
  return (
    <>
      <Meta title="پاناک | درباره ما" />
      <PageLayout title="درباره پاناک">
        <Grid container>
          <Grid item xs={6}>
            <Typography mt={3} mb={1} fontSize="32px" fontWeight="400">
              پاناک
            </Typography>
            <Typography fontSize="17px">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان است.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                ...flexEnd,
              }}
            >
              <img
                src="/vectors/team.png"
                alt="team vector"
                width="423px"
                height="336px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={18}>
            <Box textAlign="center">
              <Typography fontSize="32px" fontWeight="400">
                تیم ما
              </Typography>
              <Typography fontSize="15px">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 8 }}
            >
              {TEAM_MEMBERS.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
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
