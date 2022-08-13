import { Avatar, Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexJustifyCenter } from "mui/theme/commonStyles";

function TeacherDetails({ course }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        mt: 3,
        p: 3,
        ...flexAlignCenter,
        flexDirection: "column",
      }}
    >
      <Box>
        <Avatar
          src="http://4kwallpapers.com/images/walls/thumbs_2t/4674.jpg"
          sx={{ width: "114px", height: "114px" }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            mt: 1,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          صالح جلیلی
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: (theme) => theme.palette.primary.contrastText }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Box>
    </Box>
  );
}

export default TeacherDetails;
