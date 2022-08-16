import { Grid, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function PanakDescription() {
  return (
    <Grid item xs={12} mt={9} sx={{ ...flexAlignCenter }}>
      <Grid item xs={5}>
        <img src="/images/student-on-laptop.png" alt="student" width="100%" />
      </Grid>
      <Grid item xs={7}>
        <Typography sx={{ fontSize: "25px", fontWeight: "400", mb: 2 }}>
          پاناک
        </Typography>
        <Typography sx={{ fontSize: "15px", width: "70%" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PanakDescription;
