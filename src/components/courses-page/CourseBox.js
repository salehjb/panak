import Link from "next/link";
import {
  IconButton,
  Typography,
  Link as MuiLink,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "redux/cart/cartSlice";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// icons
import { ProfileIcon, ClockIcon, AddProductIcon } from "shared/Icons";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function CourseBox({ product }) {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        borderRadius: "15px",
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Link href={`/courses/${product.id}`}>
        <MuiLink>
          <CardMedia
            component="img"
            height="250"
            src={product.image}
            sx={{ borderRadius: "15px" }}
          />
        </MuiLink>
      </Link>
      <CardContent>
        <Link href={`/courses/${product.id}`}>
          <MuiLink>
            <Typography sx={{ fontSize: "17px", fontWeight: "400" }}>
              {product.title}
            </Typography>
          </MuiLink>
        </Link>
        <Box sx={{ ...flexAlignCenter, mt: 2 }}>
          <ProfileIcon />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {product.teacher}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1.5 }}>
          <ClockIcon />
          <Typography sx={{ fontSize: "15px", fontFamily: "Yekan", mr: 1 }}>
            {timeFormatter(15, 33, 0)}
          </Typography>
        </Box>
        <Box
          sx={{ ...flexAlignCenter, justifyContent: "space-between", mt: 2 }}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: "400", mr: 1 }}>
            {priceFormatter(product.price)} تومان
          </Typography>
          <IconButton
            onClick={() => dispatch(addItem(product))}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
            }}
          >
            <AddProductIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CourseBox;
