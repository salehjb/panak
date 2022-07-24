import Image from "next/image";
// datas
import { TEAM_MEMBERS } from "../datas";
// MUI
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

function AboutUs() {
  // styles
  const theme = useTheme();
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&::before": {
        position: "absolute",
        content: '""',
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "260px",
        top: "80px",
        borderRadius: "0px 0px 72px 72px",
        zIndex: -1,
      },
    },
    title: {
      color: theme.palette.common.white,
      fontSize: "40px",
      margin: "1rem 0",
      textAlign: "center",
    },
    boxContainer: {
      width: "100%",
      backgroundColor: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      borderRadius: "32px",
      display: "flex",
      flexDirection: "column",
      padding: "0 4rem",
      color: "#455A64",
      paddingBottom: "5rem"
    },
    vector: {
      position: "relative",
      width: "423px",
      height: "336px",
    },
  };

  return (
    <Box sx={styles.box}>
      <Container maxWidth="xl">
        <Typography sx={styles.title}>درباره پاناک</Typography>
        <Box sx={styles.boxContainer}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography fontSize="32px" fontWeight="400">
                پاناک
              </Typography>
              <Typography fontSize="17px">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان است.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان است.
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <Box sx={styles.vector}>
                <Image
                  src={"/vectors/team.png"}
                  objectFit="contain"
                  layout="fill"
                />
              </Box>
            </Grid>
            <Grid xs={12} mt={18} textAlign="center">
              <Typography fontSize="32px" fontWeight="400">تیم ما</Typography>
              <Typography fontSize="15px">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</Typography>
            </Grid>
            <Grid xs={12} mt={8} display="flex" justifyContent="space-evenly">
              {TEAM_MEMBERS.map((item, index) => (
              <Box key={index} display="flex" flexDirection="column" alignItems="center">
                <Avatar src={item.image} sx={{ width: "175px", height: "175px" }} />
                <Typography fontWeight="400" fontSize="24px" sx={{ mt: "1rem" }}>{item.name}</Typography>
                <Typography fontSize="18px">{item.stack}</Typography>
              </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
