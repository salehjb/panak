import Image from "next/image";
// components
import PageLayout from "../components/layout/PageLayout";
// MUI
import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";
// datas
import { COOPERATION_BENEFITS, PANAK_EMPLOYMENT_INPUTS } from "../datas";

function PanakEmployment() {
  // styles
  const theme = useTheme();
  const styles = {
    vector: {
      position: "relative",
      width: "358px",
      height: "205px"
    },
    iconBox: {
      width: "62px",
      height: "62px",
      backgroundColor: "#0E363F",
      borderRadius: "8px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    formContainer: {
      border: "1px solid #CFD8DC",
      borderRadius: "12px",
      padding: "1rem",
    },
    confirmButton: {
      width: "160px",
      height: "48px",
      marginTop: "2rem",
      color: "white",
      display: "flex",
      backgroundColor: "#FF9B0C",
      "&:hover": {
        backgroundColor: "#e98d0d"
      }
    }
  };

  return (
    <PageLayout title="استخدام در پاناک">
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography mt={3} mb={1} fontSize="32px" fontWeight="400">
            استخدام در پاناک
          </Typography>
          <Typography fontSize="17px">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد
          </Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Box sx={styles.vector}>
            <Image
              src={"/vectors/panak-employment.png"}
              alt="project-cooperation"
              objectFit="contain"
              layout="fill"
            />
          </Box>
        </Grid>
        <Grid item xs={12} mt={15} mb={20} textAlign="center">
          <Typography fontSize="20px" fontWeight="400">
            مزایای همکاری با ما
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={5}>
            {COOPERATION_BENEFITS.map((item, index) => {
              const CustomIcon = item.icon;
              return (
                <Grid
                  item
                  xs={4}
                  textAlign="center"
                  flexDirection="column"
                  alignItems="center"
                  display="flex"
                  mt={item.topElement ? -9 : null}
                >
                  <Box sx={styles.iconBox} mb={2}>
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
        <Grid item xs={12} mt={15} sx={styles.formContainer}>
          <Typography fontSize="20px" fontWeight="400">
            اطلاعات زیر را تکمیل کنید. به زودی با شما تماس میگیریم.
          </Typography>
          <Grid container mt={6} columnSpacing={5}>
            {PANAK_EMPLOYMENT_INPUTS.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Typography mb={0.8} fontWeight="400">{item.label}</Typography>
                <TextField fullWidth variant="outlined" />
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" sx={styles.confirmButton}>ارسال فرم درخواست</Button>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default PanakEmployment;
