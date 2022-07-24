import Image from "next/image";
// datas
import { TEAM_MEMBERS } from "../datas";
// MUI
import { Avatar, Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material";

function AboutUs() {
  // styles
  const theme = useTheme();
  const styles = {
    container: {
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
    },
    gridContainer: {
      width: "1272px",
      backgroundColor: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      borderRadius: "32px",
      display: "flex",
      flexDirection: "column",
      padding: "0 4rem"
    },
    aboutPanak: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    explanation: {
      maxWidth: "50%",
      display: "flex",
      flexDirection: "column",
      lineHeight: "26px"
    },
    vector: {
      maxWidth: "50%",
      position: "relative",
      width: "423px",
      height: "336px",
    },
    ourTeam: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "7rem",
      marginBottom: "4rem"
    },
    teamMembers: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      mt: "3rem"
    },
    teamMemberBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <Container sx={styles.container}>
      <Typography variant="h1" component="h2" sx={styles.title}>
        درباره ما
      </Typography>
      <Grid container sx={styles.gridContainer}>
        <Grid item sx={styles.aboutPanak}>
          <Box sx={styles.explanation} component="div">
            <Typography fontWeight="400" color="#455A64" fontSize="32px" variant="h4" component="h6">
              پاناک
            </Typography>
            <Typography color="#455A64" fontSize="14px" variant="p" component="p">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته 
            </Typography>
          </Box>
          <Box component="div" sx={styles.vector}>
            <Image
              src={"/vectors/team.png"}
              alt="vector"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Grid>
        <Grid item sx={styles.ourTeam}>
          <Typography fontWeight="400" color="#455A64" fontSize="32px" variant="h4" component="h6">
            تیم ما
          </Typography>
          <Typography color="#455A64" fontSize="15" variant="p" component="p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</Typography>
          <Stack sx={styles.teamMembers}>
            {TEAM_MEMBERS.map((item, index) => (
              <Box component="div" key={index} sx={styles.teamMemberBox}>
                <Avatar src={item.image} sx={{ width: "175px", height: "175px" }} />
                <Typography fontWeight="400" fontSize="24px" sx={{ mt: "1rem" }}>{item.name}</Typography>
                <Typography fontSize="18px">{item.stack}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
