import Image from "next/image";
// components
import PageLayout from "../components/layout/PageLayout";
// MUI
import { Box, Button, Grid, InputBase, Typography, useTheme } from "@mui/material";
// datas
import { PROJECT_COOPERATION_INPUTS } from "../datas";

function ProjectCooperation() {
  // styles
  const theme = useTheme();
  const styles = {
    vector: {
      position: "relative",
      width: "472px",
      height: "333px",
    },
    input: {
      height: "48px",
      borderRadius: "8px",
      border: "1px solid #CFD8DC",
      padding: "1rem"
    },
    descriptionInput: {
      borderRadius: "8px",
      border: "1px solid #CFD8DC",
      padding: "1rem"
    },
    sendButton: {
      width: "160x",
      height: "48px",
      backgroundColor: "#FF9B0C",
      mt: 4,
      color: "white",
      "&:hover": {
        backgroundColor: "#e98d0d",
      },
    },
  };

  return (
    <PageLayout title="همکاری در پروژه">
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography mt={3} mb={1} fontSize="32px" fontWeight="400">
            همکاری با پاناک
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
              src={"/vectors/project-cooperation.png"}
              alt="project-cooperation"
              objectFit="contain"
              layout="fill"
            />
          </Box>
        </Grid>
        <Grid item xs={12} mt={9} mb={5}>
          <Typography fontSize="20px" fontWeight="400">
            اطلاعات زیر را تکمیل کنید. به زودی با شما تماس میگیریم
          </Typography>
        </Grid>
        <Grid container columnSpacing={5} rowSpacing={5}>
          {PROJECT_COOPERATION_INPUTS.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Typography mb={0.8} fontWeight="400">
                {item.label}
              </Typography>
              <InputBase fullWidth sx={styles.input} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography mb={0.8} fontWeight="400">
              توضیحات
            </Typography>
            <InputBase
              fullWidth
              sx={styles.descriptionInput}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={styles.sendButton}>ارسال فرم درخواست</Button>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default ProjectCooperation;
