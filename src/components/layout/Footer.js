import Image from "next/image";
import Link from "next/link";
// MUI
import {
  Box,
  Container,
  Grid,
  Typography,
  InputBase,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
// datas
import { SOCIAL_MEDIAS } from "datas";
// mui => theme
import { flexCenter, flexEnd } from "mui/theme/commonStyles";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          backgroundImage: `url(${"/vectors/education-cap.png"})`,
          backgroundPosition: "50px center",
          backgroundRepeat: "no-repeat",
          borderRadius: "56px 56px 0px 0px",
          mt: "15rem",
          padding: "0 2rem 1.5rem 2rem",
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={10} maxHeight="120px">
              <Box
                sx={{
                  position: "relative",
                  width: "109px",
                  height: "247px",
                  top: "-10rem",
                }}
              >
                <img src={"/vectors/mardak.png"} alt="mardak" />
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                ...flexEnd,
              }}
            >
              {SOCIAL_MEDIAS.map((item, index) => {
                const CustomTag = item.icon;
                return (
                  <Link href="/" key={index}>
                    <MuiLink
                      sx={{
                        ...flexCenter,
                        padding: "0.4rem",
                        color: "white",
                        border: "2px solid white",
                        marginRight: "0.8rem",
                        borderRadius: "50%",
                      }}
                    >
                      <CustomTag />
                    </MuiLink>
                  </Link>
                );
              })}
            </Grid>
            <Grid item xs={8}>
              <Typography fontSize="19px" fontWeight="400">
                پاناک
              </Typography>
              <Typography fontSize="15px" lineHeight="25px">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                ...flexEnd,
              }}
            >
              <Box>
                <Typography mb={1} fontSize="15px">
                  برای اطلاع از جدیدترین دوره ها و تخفیفها ایمیل خود را وارد
                  کنید
                </Typography>
                <Box display="flex">
                  <InputBase
                    fullWidth
                    placeholder="ایمیل خود را وارد کنید"
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderRadius: "8px",
                      p: 1,
                      ml: 1,
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      borderRadius: "8px",
                      color: (theme) => theme.palette.secondary.contrastText,
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.secondary.dark,
                      },
                    }}
                  >
                    تایید
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "white", margin: "1rem 0" }}
              />
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" mb={2.5}>
                <LocationOnIcon />
                <Typography mr={1}>
                  مشهد، بلوار خیام، خیام 10، پلاک 36
                </Typography>
              </Box>
              <Box display="flex" mb={2.5}>
                <PhoneEnabledIcon />
                <Typography mr={1}>شماره تماس: 09154417686</Typography>
              </Box>
              <Box display="flex">
                <EmailIcon />
                <Typography mr={1}>ایمیل: salehjalili36@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Typography fontSize="16px" fontWeight="400" mb={2}>
                لینک های مهم
              </Typography>
              <Box display="flex">
                <Box
                  display="flex"
                  flexDirection="column"
                  fontSize="14px"
                  lineHeight="30px"
                  ml={9}
                >
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک اول</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک دوم</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک سوم</MuiLink>
                  </Link>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  fontSize="14px"
                  lineHeight="30px"
                  ml={9}
                >
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک اول</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک دوم</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک سوم</MuiLink>
                  </Link>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  fontSize="14px"
                  lineHeight="30px"
                >
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک اول</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک دوم</MuiLink>
                  </Link>
                  <Link href="/">
                    <MuiLink sx={{ color: "white" }}>لینک سوم</MuiLink>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4} display="flex" justifyContent="flex-end">
              <Box>
                <img
                  src={"/logos/etemad.png"}
                  alt="etemad"
                  width="170px"
                  height="170px"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
