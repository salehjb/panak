import { Grid, Typography, Box, Container } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexEnd } from "mui/theme/commonStyles";
// components
import Description from "shared/Description";

function PanakDescription() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={7} sx={{ ...flexAlignCenter, color: "primary.main" }}>
          <Box>
            <Typography sx={{ fontSize: "25px", fontWeight: "400", mb: 1 }}>
              پاناک
            </Typography>
            <Box sx={{ width: "90%" }}> 
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Description>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ ...flexEnd }}>
            <video
              src="/bache-mamani.mp4"
              controls
              width="100%"
              controlsList="nodownload"
              poster="/images/mehdi-saleh-fateme-behind-their-own-laptop.JPG"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PanakDescription;
