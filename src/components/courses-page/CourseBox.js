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
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getAllCarts } from "redux/cart/cartSlice";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function CourseBox({ course }) {
  const dispatch = useDispatch();

  const cart = useSelector(getAllCarts);

  const courseExistInCart =
    cart.findIndex((item) => item.id === course.id) !== -1;

  return (
    <Card
      sx={{
        borderRadius: "15px",
        color: "primary.contrastText",
      }}
    >
      <Link href={`/courses/${course.id}`}>
        <MuiLink>
          <CardMedia
            component="img"
            height="250"
            src={course.image}
            sx={{ borderRadius: "15px" }}
          />
        </MuiLink>
      </Link>
      <CardContent>
        <Link href={`/courses/${course.id}`}>
          <MuiLink>
            <Typography sx={{ fontSize: "17px", fontWeight: "400" }}>
              {course.title}
            </Typography>
          </MuiLink>
        </Link>
        <Box sx={{ ...flexAlignCenter, mt: 2 }}>
          <img src="icons/profile-icon.svg" alt="profile icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {course.teacher}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1.5 }}>
          <img src="icons/clock-icon.svg" alt="clock icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {timeFormatter(15, 33, 0)}
          </Typography>
        </Box>
        <Box
          sx={{ ...flexAlignCenter, justifyContent: "space-between", mt: 2 }}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: "400", mr: 1 }}>
            {priceFormatter(course.price)} تومان
          </Typography>
          <IconButton
            onClick={courseExistInCart ? null : () => dispatch(addItem(course))}
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: courseExistInCart
                ? "success.light"
                : "secondary.main",
              "&:hover": {
                backgroundColor: courseExistInCart
                  ? "success.main"
                  : "secondary.dark",
              },
            }}
          >
            {courseExistInCart ? (
              <Link href="/shopping-cart">
                <MuiLink sx={{ ...flexCenter }}>
                  <DoneIcon sx={{ color: "white" }} />
                </MuiLink>
              </Link>
            ) : (
              <img src="/icons/add-product-icon.svg" alt="add product icon" />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CourseBox;
