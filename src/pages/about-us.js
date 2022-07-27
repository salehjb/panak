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
import PageLayout from "../components/layout/PageLayout";

function AboutUs() {
  // styles
  const theme = useTheme();
  const styles = {
    vector: {
      position: "relative",
      width: "423px",
      height: "336px",
    },
  };

  return (
    <PageLayout title="درباره پاناک">
      <Grid container alignItems="center">
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
              alt="team"
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
    </PageLayout>
  );
}

export default AboutUs;
