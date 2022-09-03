import { Box, Button, Grid, Typography } from "@mui/material";
// components
import PageLayout from "components/layout/PageLayout";
import Meta from "components/Meta";
import Description from "shared/Description";
import Input from "shared/Input";
// datas
import { COOPERATION_BENEFITS, PANAK_EMPLOYMENT_INPUTS } from "datas";
// mui => theme
import {
  flexAlignCenter,
  flexCenter,
  flexJustifyCenter,
} from "mui/theme/commonStyles";

const metaInfo = {
  title: "پاناک | استخدام",
  description:
    "در تیم پاناک میتونیم در کنار هم یاد بگیریم و رشد کنیم شما در این صفحه میتونید درخواست همکاری به پاناک بدید",
  keywords: "استخدام در پاناک، استخدام، نیروی کار",
};

function PanakEmployment() {
  return (
    <>
      <Meta
        title={metaInfo.title}
        description={metaInfo.description}
        keywords={metaInfo.keywords}
      />
      <PageLayout title="استخدام در پاناک">
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "32px" },
                  fontWeight: "400",
                  mt: 3,
                  mb: 1,
                }}
              >
                استخدام در پاناک
              </Typography>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
              </Description>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "358px" },
                  height: { xs: "100%", md: "205px" },
                  mt: { xs: 3, md: 0 },
                }}
              >
                <img
                  src={"/vectors/panak-employment.png"}
                  alt="project-cooperation"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 10,
              mb: { xs: 2, md: 14 },
              textAlign: "center",
            }}
          >
            <Typography fontSize="20px" fontWeight="400">
              مزایای همکاری با ما
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              {COOPERATION_BENEFITS.map((item, index) => {
                const CustomIcon = item.icon;
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    key={index}
                    sx={{
                      textAlign: "center",
                      ...flexAlignCenter,
                      flexDirection: "column",
                      mt: { xs: 5, md: item.topElement ? -9 : 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: "62px",
                        height: "62px",
                        backgroundColor: "primary.main",
                        borderRadius: "8px",
                        color: "white",
                        ...flexCenter,
                        mb: 2,
                      }}
                    >
                      <CustomIcon fontSize="large" />
                    </Box>
                    <Typography fontSize="15px" fontWeight="400" mb={1}>
                      {item.title}
                    </Typography>
                    <Typography width="288px">{item.text}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #CFD8DC",
              borderRadius: "12px",
              p: 2,
              mt: 15,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "19px" },
                fontWeight: "400",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              اطلاعات زیر را تکمیل کنید. به زودی با شما تماس میگیریم.
            </Typography>
            <Grid container mt={4} columnSpacing={5}>
              {PANAK_EMPLOYMENT_INPUTS.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={index}
                  sx={{ mt: { xs: 2, md: 0 } }}
                >
                  <Input item={item} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                width: { xs: "100%", md: "160px" },
                mt: 2,
                ...flexJustifyCenter,
              }}
            >
              <Button variant="contained" color="secondary" fullWidth>
                ارسال فرم درخواست
              </Button>
            </Box>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
}

export default PanakEmployment;
