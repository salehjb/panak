import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ArrowCircleLeft } from "@mui/icons-material";
// mui => theme
import {
  flexAlignCenter,
  flexCenter,
  flexJustifyCenter,
} from "mui/theme/commonStyles";

function ArticleBox({ article }) {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        color: (theme) => theme.palette.primary.contrastText,
        paddingBottom: "0.5rem",
      }}
    >
      <Link href={`/articles/${article.id}`}>
        <MuiLink>
          <Box sx={{ position: "relative", ...flexJustifyCenter }}>
            <CardMedia
              component="img"
              height="250"
              src={article.image}
              sx={{ borderRadius: "16px" }}
            />
            <Box
              sx={{
                width: "95%",
                height: "45px",
                position: "absolute",
                bottom: "0.5rem",
                borderRadius: "16px",
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                ...flexCenter,
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                {article.title}
              </Typography>
            </Box>
          </Box>
        </MuiLink>
      </Link>
      <CardContent sx={{ ...flexCenter }}>
        <Box
          sx={{ backgroundColor: "#CFD8DC", height: "2px", width: "50%" }}
        ></Box>
        <Typography sx={{ width: "50%", textAlign: "center" }}>
          2 هفته پیش
        </Typography>
        <Box
          sx={{ backgroundColor: "#CFD8DC", height: "2px", width: "50%" }}
        ></Box>
      </CardContent>
      <CardActions>
        <Link href={`/articles/${article.id}`}>
          <MuiLink
            sx={{
              width: "100%",
              ...flexCenter,
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            <Typography sx={{ fontSize: "15px", ml: 1.5 }}>
              مطالعه بیشتر
            </Typography>
            <ArrowCircleLeft />
          </MuiLink>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ArticleBox;
