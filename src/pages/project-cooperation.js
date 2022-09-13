// components
import PageLayout from "components/layout/PageLayout";
import Meta from "components/Meta";
import Description from "shared/Description";
import Input from "shared/Input";
// MUI
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
// datas
import { PROJECT_COOPERATION_INPUTS } from "datas";

const metaInfo = {
  title: "پاناک | همکاری در پروژه",
  description:
    "تیم پاناک علاوه بر آموزش در بخش انجام پروژه های برنامه نویسی و طراحی فعالیت دارد، و این اطمینان را از طرف ما داشته باشید که پروژه های شما در بهترین نحو ممکن به عمل می آیند",
  keywords:
    "پروژه برنامه نویسی، همکاری با پاناک، پروژه، وبسایت،اپلیکیشن، طراحی",
};

function ProjectCooperation() {
  return (
    <>
      <Meta
        title={metaInfo.title}
        description={metaInfo.description}
        keywords={metaInfo.keywords}
      />
      <PageLayout title="همکاری در پروژه">
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
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
                همکاری با پاناک
              </Typography>
              <Description sx={{ fontSize: "18px" }}>
                از کارفرمایان گرامی و صاحبین برند دعوت به عمل می آوریم در صورت
                تمایل با تکمیل فرم زیر و یا ارتباط از طریق واتساپ و تماس تلفنی
                با شماره 09154417686 درخواست همکاری در پروژه خود را ثبت نمایند.
                تیم پاناک در حوزه برنامه نویسی وب، طراحی رابط و تجربه کاربری
                (UI/UX)، توسعه اپلیکیشن، اینترنت اشیا (IOT) و گرافیک دیزاین به
                مشتریان خود ارائه خدمات میدهد. کارفرمایان گرامی شما میتوانید با
                ثبت درخواست از طریق راه های ارتباطی ذکر شده مشاورین ما را از
                پروژه خود مطلع سازید، تا بتوانیم در کمترین زمان ممکن پروژه شما
                را بررسی کنیم و بهترین خدمات را ارائه دهیم.
              </Description>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
              <Box
                sx={{
                  width: { xs: "100%", md: "472px" },
                  height: { xs: "100%", md: "333px" },
                }}
              >
                <img
                  src={"/vectors/project-cooperation.png"}
                  alt="project-cooperation"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 10, mb: { xs: 2, md: 5 } }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "19px" },
                fontWeight: "400",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              اطلاعات زیر را تکمیل کنید. به زودی با شما تماس میگیریم
            </Typography>
          </Grid>
          <Grid container spacing={{ xs: 0, md: 2 }}>
            {PROJECT_COOPERATION_INPUTS.map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                sx={{ mt: { xs: 2, md: 0 } }}
                key={index}
              >
                <Input item={item} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography mb={0.8} fontWeight="400">
                توضیحات
              </Typography>
              <InputBase
                fullWidth
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #CFD8DC",
                  p: 2,
                }}
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Box sx={{ width: { xs: "100%", md: "160px" } }}>
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

export default ProjectCooperation;
